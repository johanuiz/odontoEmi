#!/usr/bin/env python3
"""
API Server para Sistema de Gestión Odontológica DoctoClique
Servidor Flask con endpoints para todas las funcionalidades
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import json
import os
from datetime import datetime, date
import uuid

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos
DATABASE = 'agenda.db'

def get_db_connection():
    """Obtiene conexión a la base de datos"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_database():
    """Inicializa la base de datos con todas las tablas"""
    conn = get_db_connection()
    
    # Tabla de pacientes
    conn.execute('''
        CREATE TABLE IF NOT EXISTS patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT,
            phone TEXT,
            dni TEXT UNIQUE,
            birth_date DATE,
            gender TEXT,
            address TEXT,
            blood_type TEXT,
            allergies TEXT,
            chronic_diseases TEXT,
            current_medications TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Tabla de citas
    conn.execute('''
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            type TEXT NOT NULL,
            status TEXT DEFAULT 'pending',
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (patient_id) REFERENCES patients (id)
        )
    ''')
    
    # Tabla de historias clínicas
    conn.execute('''
        CREATE TABLE IF NOT EXISTS clinical_histories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            appointment_id INTEGER,
            reason TEXT NOT NULL,
            diagnosis TEXT,
            treatment TEXT,
            observations TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (patient_id) REFERENCES patients (id),
            FOREIGN KEY (appointment_id) REFERENCES appointments (id)
        )
    ''')
    
    # Tabla de facturas
    conn.execute('''
        CREATE TABLE IF NOT EXISTS invoices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            appointment_id INTEGER,
            invoice_number TEXT UNIQUE NOT NULL,
            total_amount DECIMAL(10,2) NOT NULL,
            status TEXT DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (patient_id) REFERENCES patients (id),
            FOREIGN KEY (appointment_id) REFERENCES appointments (id)
        )
    ''')
    
    # Tabla de pagos
    conn.execute('''
        CREATE TABLE IF NOT EXISTS payments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            invoice_id INTEGER NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            payment_method TEXT NOT NULL,
            reference TEXT,
            status TEXT DEFAULT 'completed',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (invoice_id) REFERENCES invoices (id)
        )
    ''')
    
    # Tabla de inventario
    conn.execute('''
        CREATE TABLE IF NOT EXISTS inventory (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            category TEXT,
            supplier TEXT,
            current_stock INTEGER DEFAULT 0,
            min_stock INTEGER DEFAULT 5,
            unit_price DECIMAL(10,2),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Tabla de movimientos de inventario
    conn.execute('''
        CREATE TABLE IF NOT EXISTS inventory_movements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            inventory_id INTEGER NOT NULL,
            movement_type TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            reason TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (inventory_id) REFERENCES inventory (id)
        )
    ''')
    
    # Tabla de exámenes
    conn.execute('''
        CREATE TABLE IF NOT EXISTS exams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patient_id INTEGER NOT NULL,
            exam_type TEXT NOT NULL,
            laboratory TEXT,
            status TEXT DEFAULT 'pending',
            results TEXT,
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (patient_id) REFERENCES patients (id)
        )
    ''')
    
    # Tabla de reportes
    conn.execute('''
        CREATE TABLE IF NOT EXISTS reports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            report_type TEXT NOT NULL,
            title TEXT NOT NULL,
            data TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (report_type) REFERENCES report_types (type)
        )
    ''')
    
    conn.commit()
    conn.close()

# === PACIENTES ===
@app.route('/api/patients', methods=['GET'])
def get_patients():
    """Obtiene todos los pacientes"""
    conn = get_db_connection()
    patients = conn.execute('SELECT * FROM patients ORDER BY name').fetchall()
    conn.close()
    return jsonify([dict(row) for row in patients])

@app.route('/api/patients', methods=['POST'])
def create_patient():
    """Crea un nuevo paciente"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO patients (name, email, phone, dni, birth_date, gender, address, 
                             blood_type, allergies, chronic_diseases, current_medications)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        data['name'], data.get('email'), data.get('phone'), data.get('dni'),
        data.get('birth_date'), data.get('gender'), data.get('address'),
        data.get('blood_type'), data.get('allergies'), data.get('chronic_diseases'),
        data.get('current_medications')
    ))
    conn.commit()
    patient_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': patient_id, 'message': 'Paciente creado exitosamente'}), 201

@app.route('/api/patients/<int:patient_id>', methods=['GET'])
def get_patient(patient_id):
    """Obtiene un paciente específico"""
    conn = get_db_connection()
    patient = conn.execute('SELECT * FROM patients WHERE id = ?', (patient_id,)).fetchone()
    conn.close()
    
    if patient:
        return jsonify(dict(patient))
    return jsonify({'error': 'Paciente no encontrado'}), 404

@app.route('/api/patients/<int:patient_id>', methods=['PUT'])
def update_patient(patient_id):
    """Actualiza un paciente"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        UPDATE patients SET name = ?, email = ?, phone = ?, dni = ?, birth_date = ?,
                           gender = ?, address = ?, blood_type = ?, allergies = ?,
                           chronic_diseases = ?, current_medications = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    ''', (
        data['name'], data.get('email'), data.get('phone'), data.get('dni'),
        data.get('birth_date'), data.get('gender'), data.get('address'),
        data.get('blood_type'), data.get('allergies'), data.get('chronic_diseases'),
        data.get('current_medications'), patient_id
    ))
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Paciente actualizado exitosamente'})

@app.route('/api/patients/<int:patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    """Elimina un paciente"""
    conn = get_db_connection()
    conn.execute('DELETE FROM patients WHERE id = ?', (patient_id,))
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Paciente eliminado exitosamente'})

# === CITAS ===
@app.route('/api/appointments', methods=['GET'])
def get_appointments():
    """Obtiene todas las citas"""
    conn = get_db_connection()
    appointments = conn.execute('''
        SELECT a.*, p.name as patient_name 
        FROM appointments a 
        JOIN patients p ON a.patient_id = p.id 
        ORDER BY a.date, a.time
    ''').fetchall()
    conn.close()
    return jsonify([dict(row) for row in appointments])

@app.route('/api/appointments', methods=['POST'])
def create_appointment():
    """Crea una nueva cita"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO appointments (patient_id, date, time, type, status, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['patient_id'], data['date'], data['time'], 
        data['type'], data.get('status', 'pending'), data.get('notes')
    ))
    conn.commit()
    appointment_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': appointment_id, 'message': 'Cita creada exitosamente'}), 201

@app.route('/api/appointments/<int:appointment_id>', methods=['GET'])
def get_appointment(appointment_id):
    """Obtiene una cita específica"""
    conn = get_db_connection()
    appointment = conn.execute('''
        SELECT a.*, p.name as patient_name 
        FROM appointments a 
        JOIN patients p ON a.patient_id = p.id 
        WHERE a.id = ?
    ''', (appointment_id,)).fetchone()
    conn.close()
    
    if appointment:
        return jsonify(dict(appointment))
    return jsonify({'error': 'Cita no encontrada'}), 404

@app.route('/api/appointments/<int:appointment_id>', methods=['PUT'])
def update_appointment(appointment_id):
    """Actualiza una cita"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        UPDATE appointments SET patient_id = ?, date = ?, time = ?, type = ?, 
                               status = ?, notes = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    ''', (
        data['patient_id'], data['date'], data['time'], data['type'],
        data['status'], data.get('notes'), appointment_id
    ))
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Cita actualizada exitosamente'})

@app.route('/api/appointments/<int:appointment_id>', methods=['DELETE'])
def delete_appointment(appointment_id):
    """Elimina una cita"""
    conn = get_db_connection()
    conn.execute('DELETE FROM appointments WHERE id = ?', (appointment_id,))
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Cita eliminada exitosamente'})

# === HISTORIAS CLÍNICAS ===
@app.route('/api/clinical-histories', methods=['GET'])
def get_clinical_histories():
    """Obtiene todas las historias clínicas"""
    conn = get_db_connection()
    histories = conn.execute('''
        SELECT h.*, p.name as patient_name 
        FROM clinical_histories h 
        JOIN patients p ON h.patient_id = p.id 
        ORDER BY h.created_at DESC
    ''').fetchall()
    conn.close()
    return jsonify([dict(row) for row in histories])

@app.route('/api/clinical-histories', methods=['POST'])
def create_clinical_history():
    """Crea una nueva historia clínica"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO clinical_histories (patient_id, appointment_id, reason, diagnosis, treatment, observations)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['patient_id'], data.get('appointment_id'), data['reason'],
        data.get('diagnosis'), data.get('treatment'), data.get('observations')
    ))
    conn.commit()
    history_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': history_id, 'message': 'Historia clínica creada exitosamente'}), 201

# === FACTURAS ===
@app.route('/api/invoices', methods=['GET'])
def get_invoices():
    """Obtiene todas las facturas"""
    conn = get_db_connection()
    invoices = conn.execute('''
        SELECT i.*, p.name as patient_name 
        FROM invoices i 
        JOIN patients p ON i.patient_id = p.id 
        ORDER BY i.created_at DESC
    ''').fetchall()
    conn.close()
    return jsonify([dict(row) for row in invoices])

@app.route('/api/invoices', methods=['POST'])
def create_invoice():
    """Crea una nueva factura"""
    data = request.get_json()
    
    # Generar número de factura único
    invoice_number = f"FAC-{datetime.now().strftime('%Y%m%d')}-{uuid.uuid4().hex[:6].upper()}"
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO invoices (patient_id, appointment_id, invoice_number, total_amount, status)
        VALUES (?, ?, ?, ?, ?)
    ''', (
        data['patient_id'], data.get('appointment_id'), invoice_number,
        data['total_amount'], data.get('status', 'pending')
    ))
    conn.commit()
    invoice_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': invoice_id, 'invoice_number': invoice_number, 'message': 'Factura creada exitosamente'}), 201

# === PAGOS ===
@app.route('/api/payments', methods=['GET'])
def get_payments():
    """Obtiene todos los pagos"""
    conn = get_db_connection()
    payments = conn.execute('''
        SELECT p.*, i.invoice_number 
        FROM payments p 
        JOIN invoices i ON p.invoice_id = i.id 
        ORDER BY p.created_at DESC
    ''').fetchall()
    conn.close()
    return jsonify([dict(row) for row in payments])

@app.route('/api/payments', methods=['POST'])
def create_payment():
    """Crea un nuevo pago"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO payments (invoice_id, amount, payment_method, reference, status)
        VALUES (?, ?, ?, ?, ?)
    ''', (
        data['invoice_id'], data['amount'], data['payment_method'],
        data.get('reference'), data.get('status', 'completed')
    ))
    conn.commit()
    payment_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': payment_id, 'message': 'Pago registrado exitosamente'}), 201

# === INVENTARIO ===
@app.route('/api/inventory', methods=['GET'])
def get_inventory():
    """Obtiene todos los items del inventario"""
    conn = get_db_connection()
    items = conn.execute('SELECT * FROM inventory ORDER BY name').fetchall()
    conn.close()
    return jsonify([dict(row) for row in items])

@app.route('/api/inventory', methods=['POST'])
def create_inventory_item():
    """Crea un nuevo item en el inventario"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO inventory (name, description, category, supplier, current_stock, min_stock, unit_price)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (
        data['name'], data.get('description'), data.get('category'), data.get('supplier'),
        data.get('current_stock', 0), data.get('min_stock', 5), data.get('unit_price')
    ))
    conn.commit()
    item_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': item_id, 'message': 'Item de inventario creado exitosamente'}), 201

@app.route('/api/inventory/<int:item_id>', methods=['PUT'])
def update_inventory_item(item_id):
    """Actualiza un item del inventario"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        UPDATE inventory SET name = ?, description = ?, category = ?, supplier = ?,
                            current_stock = ?, min_stock = ?, unit_price = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    ''', (
        data['name'], data.get('description'), data.get('category'), data.get('supplier'),
        data.get('current_stock'), data.get('min_stock'), data.get('unit_price'), item_id
    ))
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Item de inventario actualizado exitosamente'})

# === EXÁMENES ===
@app.route('/api/exams', methods=['GET'])
def get_exams():
    """Obtiene todos los exámenes"""
    conn = get_db_connection()
    exams = conn.execute('''
        SELECT e.*, p.name as patient_name 
        FROM exams e 
        JOIN patients p ON e.patient_id = p.id 
        ORDER BY e.created_at DESC
    ''').fetchall()
    conn.close()
    return jsonify([dict(row) for row in exams])

@app.route('/api/exams', methods=['POST'])
def create_exam():
    """Crea un nuevo examen"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO exams (patient_id, exam_type, laboratory, status, results, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['patient_id'], data['exam_type'], data.get('laboratory'),
        data.get('status', 'pending'), data.get('results'), data.get('notes')
    ))
    conn.commit()
    exam_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': exam_id, 'message': 'Examen creado exitosamente'}), 201

# === REPORTES ===
@app.route('/api/reports', methods=['GET'])
def get_reports():
    """Obtiene todos los reportes"""
    conn = get_db_connection()
    reports = conn.execute('SELECT * FROM reports ORDER BY created_at DESC').fetchall()
    conn.close()
    return jsonify([dict(row) for row in reports])

@app.route('/api/reports', methods=['POST'])
def create_report():
    """Crea un nuevo reporte"""
    data = request.get_json()
    
    conn = get_db_connection()
    conn.execute('''
        INSERT INTO reports (report_type, title, data)
        VALUES (?, ?, ?)
    ''', (
        data['report_type'], data['title'], json.dumps(data.get('data', {}))
    ))
    conn.commit()
    report_id = conn.lastrowid
    conn.close()
    
    return jsonify({'id': report_id, 'message': 'Reporte creado exitosamente'}), 201

# === ESTADÍSTICAS ===
@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Obtiene estadísticas generales del sistema"""
    conn = get_db_connection()
    
    # Estadísticas de pacientes
    total_patients = conn.execute('SELECT COUNT(*) as count FROM patients').fetchone()['count']
    
    # Estadísticas de citas
    total_appointments = conn.execute('SELECT COUNT(*) as count FROM appointments').fetchone()['count']
    today_appointments = conn.execute('''
        SELECT COUNT(*) as count FROM appointments WHERE date = DATE('now')
    ''').fetchone()['count']
    
    # Estadísticas de facturas
    total_invoices = conn.execute('SELECT COUNT(*) as count FROM invoices').fetchone()['count']
    total_revenue = conn.execute('SELECT COALESCE(SUM(total_amount), 0) as total FROM invoices WHERE status = "paid"').fetchone()['total']
    
    conn.close()
    
    return jsonify({
        'patients': {
            'total': total_patients
        },
        'appointments': {
            'total': total_appointments,
            'today': today_appointments
        },
        'invoices': {
            'total': total_invoices,
            'revenue': float(total_revenue)
        }
    })

# === RUTAS DE INICIALIZACIÓN ===
@app.route('/api/init', methods=['POST'])
def initialize_system():
    """Inicializa el sistema con datos de ejemplo"""
    init_database()
    
    # Agregar algunos pacientes de ejemplo
    conn = get_db_connection()
    
    sample_patients = [
        ('María González', 'maria@email.com', '+54 11 1234-5678', '12345678', '1990-05-15', 'Femenino', 'Av. Corrientes 1234', 'A+', 'Ninguna', 'Ninguna', 'Ninguno'),
        ('Carlos Rodríguez', 'carlos@email.com', '+54 11 2345-6789', '23456789', '1985-08-22', 'Masculino', 'Av. Santa Fe 5678', 'B+', 'Penicilina', 'Ninguna', 'Ninguno'),
        ('Ana Martínez', 'ana@email.com', '+54 11 3456-7890', '34567890', '1992-12-03', 'Femenino', 'Av. Córdoba 9012', 'O+', 'Ninguna', 'Diabetes', 'Metformina')
    ]
    
    for patient in sample_patients:
        conn.execute('''
            INSERT OR IGNORE INTO patients (name, email, phone, dni, birth_date, gender, address, blood_type, allergies, chronic_diseases, current_medications)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', patient)
    
    conn.commit()
    conn.close()
    
    return jsonify({'message': 'Sistema inicializado exitosamente con datos de ejemplo'})

if __name__ == '__main__':
    print("🚀 Iniciando API Server para DoctoClique...")
    print("📊 Endpoints disponibles:")
    print("   GET  /api/patients - Listar pacientes")
    print("   POST /api/patients - Crear paciente")
    print("   GET  /api/appointments - Listar citas")
    print("   POST /api/appointments - Crear cita")
    print("   GET  /api/clinical-histories - Listar historias clínicas")
    print("   POST /api/clinical-histories - Crear historia clínica")
    print("   GET  /api/invoices - Listar facturas")
    print("   POST /api/invoices - Crear factura")
    print("   GET  /api/payments - Listar pagos")
    print("   POST /api/payments - Crear pago")
    print("   GET  /api/inventory - Listar inventario")
    print("   POST /api/inventory - Crear item inventario")
    print("   GET  /api/exams - Listar exámenes")
    print("   POST /api/exams - Crear examen")
    print("   GET  /api/reports - Listar reportes")
    print("   POST /api/reports - Crear reporte")
    print("   GET  /api/stats - Estadísticas generales")
    print("   POST /api/init - Inicializar sistema")
    print("🌐 Servidor ejecutándose en http://localhost:5001")
    
    app.run(host='0.0.0.0', port=5001, debug=True)
