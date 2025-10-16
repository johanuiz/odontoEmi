#!/usr/bin/env python3
"""
Servidor HTTP simple para servir archivos estáticos del frontend
Sistema de Gestión Odontológica DoctoClique
"""

import http.server
import socketserver
import os
import sys
from urllib.parse import urlparse, parse_qs

PORT = 8001

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        print(f"🔍 Ruta solicitada: {path}")
        
        # Routes mapping
        if path == '/':
            # Página principal - redirigir al dashboard
            print("✅ Redirigiendo a dashboard")
            self.send_response(302)
            self.send_header('Location', '/index.html')
            self.end_headers()
            return
            
        elif path == '/index.html':
            # Dashboard principal
            print("✅ Sirviendo dashboard")
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as f:
                self.wfile.write(f.read())
            return
            
        elif path == '/panel-control/agenda_original':
            # Página de agenda
            print("✅ Ruta de agenda detectada")
            agenda_file = 'panel-control/agenda_original.html'
            if os.path.exists(agenda_file):
                print("✅ Archivo de agenda encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(agenda_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de agenda no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Agenda page not found</h1>')
                return
                
        elif path == '/panel-control/pacientes':
            # Página de pacientes
            print("✅ Ruta de pacientes detectada")
            pacientes_file = 'panel-control/pacientes.html'
            if os.path.exists(pacientes_file):
                print("✅ Archivo de pacientes encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(pacientes_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de pacientes no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Pacientes page not found</h1>')
                return
                
        elif path == '/panel-control/historias':
            # Página de historias clínicas
            print("✅ Ruta de historias detectada")
            historias_file = 'panel-control/historias.html'
            if os.path.exists(historias_file):
                print("✅ Archivo de historias encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(historias_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de historias no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Historias page not found</h1>')
                return
                
        elif path == '/panel-control/facturacion':
            # Página de facturación
            print("✅ Ruta de facturación detectada")
            facturacion_file = 'panel-control/facturacion.html'
            if os.path.exists(facturacion_file):
                print("✅ Archivo de facturación encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(facturacion_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de facturación no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Facturacion page not found</h1>')
                return
                
        elif path == '/panel-control/inventario':
            # Página de inventario
            print("✅ Ruta de inventario detectada")
            inventario_file = 'panel-control/inventario.html'
            if os.path.exists(inventario_file):
                print("✅ Archivo de inventario encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(inventario_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de inventario no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Inventario page not found</h1>')
                return
                
        elif path == '/panel-control/examenes':
            # Página de exámenes
            print("✅ Ruta de exámenes detectada")
            examenes_file = 'panel-control/examenes.html'
            if os.path.exists(examenes_file):
                print("✅ Archivo de exámenes encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(examenes_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de exámenes no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Examenes page not found</h1>')
                return
                
        elif path == '/panel-control/reportes':
            # Página de reportes
            print("✅ Ruta de reportes detectada")
            reportes_file = 'panel-control/reportes.html'
            if os.path.exists(reportes_file):
                print("✅ Archivo de reportes encontrado")
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(reportes_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                print("❌ Archivo de reportes no encontrado")
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Reportes page not found</h1>')
                return
                
        elif path == '/agenda':
            # Redirect /agenda to /panel-control/agenda_original
            print("✅ Redirigiendo /agenda a agenda_original")
            self.send_response(302)
            self.send_header('Location', '/panel-control/agenda_original')
            self.end_headers()
            return
            
        else:
            # Try to serve the file normally
            print(f"📁 Intentando servir archivo: {path}")
            return super().do_GET()

def main():
    """Función principal del servidor"""
    print("🚀 Iniciando servidor frontend para DoctoClique...")
    print(f"🌐 Servidor ejecutándose en http://localhost:{PORT}")
    print("📋 Rutas disponibles:")
    print("   / - Redirige a dashboard")
    print("   /index.html - Dashboard principal")
    print("   /panel-control/agenda_original - Agenda odontológica")
    print("   /panel-control/pacientes - Gestión de pacientes")
    print("   /panel-control/historias - Historias clínicas")
    print("   /panel-control/facturacion - Sistema de facturación")
    print("   /panel-control/inventario - Control de inventario")
    print("   /panel-control/examenes - Gestión de exámenes")
    print("   /panel-control/reportes - Reportes y analytics")
    print("   /agenda - Redirige a agenda_original")
    print("\n💡 Asegúrate de que el API server esté ejecutándose en el puerto 5001")
    print("   python3 api_server.py")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"\n✅ Servidor iniciado exitosamente en puerto {PORT}")
            print("⏹️  Presiona Ctrl+C para detener el servidor")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido por el usuario")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"\n❌ Error: El puerto {PORT} ya está en uso")
            print("💡 Solución: Mata el proceso que usa el puerto o usa otro puerto")
            print("   lsof -ti:8001 | xargs kill -9")
        else:
            print(f"\n❌ Error al iniciar servidor: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()