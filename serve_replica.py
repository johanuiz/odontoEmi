#!/usr/bin/env python3
"""
Servidor HTTP simple para servir la réplica de DoctoClique
"""

import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse

PORT = 8001

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parsear la URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Debug: imprimir la ruta solicitada
        print(f"🔍 Solicitud: {path}")
        
        # Debug adicional para archivos de agenda
        if 'agenda_original_files' in path:
            print(f"📁 Ruta de archivo original detectada: {path}")
        
        # Mapear rutas específicas
        if path == '/':
            # Página principal - redirigir a index.html
            self.send_response(302)
            self.send_header('Location', '/index.html')
            self.end_headers()
            return
        
        elif path == '/panel-control/agenda':
            # Página de agenda - servir la réplica original
            agenda_file = 'panel-control/agenda_original.html'
            if os.path.exists(agenda_file):
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                with open(agenda_file, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - Agenda page not found</h1>')
                return
        
        elif path.startswith('/agenda_original_files/') or path.startswith('/panel-control/agenda_original_files/'):
            # Servir archivos originales de la agenda (CSS, JS, imágenes)
            # Manejar tanto rutas absolutas como relativas
            if path.startswith('/panel-control/agenda_original_files/'):
                file_path = path[1:]  # Remover el slash inicial
            elif path.startswith('/agenda_original_files/'):
                file_path = 'panel-control' + path  # Agregar el prefijo panel-control
            else:
                file_path = 'panel-control/agenda_original_files' + path  # Fallback
            
            if os.path.exists(file_path):
                # Determinar el tipo de contenido basado en la extensión
                content_type = 'text/plain'
                if file_path.endswith('.css'):
                    content_type = 'text/css'
                elif file_path.endswith('.js'):
                    content_type = 'application/javascript'
                elif file_path.endswith('.png'):
                    content_type = 'image/png'
                elif file_path.endswith('.jpg') or file_path.endswith('.jpeg'):
                    content_type = 'image/jpeg'
                elif file_path.endswith('.svg'):
                    content_type = 'image/svg+xml'
                elif file_path.endswith('.gif'):
                    content_type = 'image/gif'
                elif file_path.endswith('.ico'):
                    content_type = 'image/x-icon'
                elif file_path.endswith('.woff'):
                    content_type = 'font/woff'
                elif file_path.endswith('.woff2'):
                    content_type = 'font/woff2'
                elif file_path.endswith('.ttf'):
                    content_type = 'font/ttf'
                elif file_path.endswith('.eot'):
                    content_type = 'font/eot'
                elif file_path.endswith('.gz'):
                    content_type = 'application/gzip'
                
                self.send_response(200)
                self.send_header('Content-type', content_type)
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'<h1>404 - File not found</h1>')
                return
        
        # Para todas las demás rutas, usar el comportamiento por defecto
        return super().do_GET()

def main():
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Crear el servidor
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print("🚀 Servidor iniciado en http://localhost:8000")
        print("📄 Página principal disponible en: http://localhost:8000/index.html")
        print("🔄 Presiona Ctrl+C para detener el servidor")
        
        # Abrir el navegador automáticamente
        try:
            webbrowser.open(f'http://localhost:{PORT}/index.html')
        except:
            pass
        
        # Mantener el servidor ejecutándose
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido")

if __name__ == "__main__":
    main() 