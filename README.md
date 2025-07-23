# OdontoEMI - Réplica Local de Agenda DoctoClique

## 📋 Descripción
Este proyecto contiene una réplica local de la página de agenda de DoctoClique para desarrollo y pruebas locales.

## 🗂️ Estructura del Proyecto

```
OdontoEMI/
├── serve_replica.py          # Servidor HTTP local
├── index.html               # Página principal con login
├── requirements.txt         # Dependencias Python
├── README.md               # Este archivo
└── panel-control/
    ├── agenda_original.html # Réplica completa de la agenda
    └── agenda_original_files/ # Recursos (CSS, JS, imágenes)
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
pip3 install -r requirements.txt
```

### 2. Ejecutar el servidor
```bash
python3 serve_replica.py
```

### 3. Acceder a la aplicación
- **Página principal con login**: http://localhost:8001/
- **Página de agenda**: http://localhost:8001/panel-control/agenda

## 🔧 Configuración del Servidor

El servidor (`serve_replica.py`) está configurado para:
- Puerto: 8001
- Servir archivos estáticos desde `panel-control/agenda_original_files/`
- Manejar rutas específicas para la agenda
- Proporcionar tipos MIME correctos para CSS, JS e imágenes

## 📁 Archivos Principales

### `serve_replica.py`
Servidor HTTP personalizado que maneja:
- Redirecciones de rutas
- Servicio de archivos estáticos
- Tipos MIME apropiados
- Logging de solicitudes

### `panel-control/agenda_original.html`
Réplica completa de la página de agenda original con:
- Estructura HTML completa
- Referencias a recursos locales
- Funcionalidad de Angular
- Tamaño: 2.7MB

### `panel-control/agenda_original_files/`
Directorio con todos los recursos necesarios:
- Archivos CSS
- Archivos JavaScript
- Imágenes
- Fuentes

## 🛠️ Desarrollo

### Agregar nuevos archivos
1. Coloca los archivos en `panel-control/agenda_original_files/`
2. Referencia desde HTML usando rutas relativas: `./agenda_original_files/`

### Modificar el servidor
Edita `serve_replica.py` para:
- Cambiar el puerto
- Agregar nuevas rutas
- Modificar tipos MIME

## 🔍 Solución de Problemas

### Puerto en uso
```bash
lsof -ti:8001 | xargs kill -9
```

### Archivos no encontrados
Verifica que los archivos estén en `panel-control/agenda_original_files/`

### Errores de CORS
Los recursos externos pueden causar problemas. Considera descargarlos localmente.

## 📝 Notas

- El proyecto está optimizado para desarrollo local
- Todos los recursos externos han sido comentados para evitar errores
- El servidor incluye logging para debugging
- Los archivos de validación y testing han sido removidos para simplificar

## 🤝 Contribución

Para contribuir al proyecto:
1. Mantén la estructura de directorios
2. Usa rutas relativas para recursos
3. Documenta cambios en el README
4. Prueba localmente antes de commitear 