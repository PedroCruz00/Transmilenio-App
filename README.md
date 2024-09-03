# Transmilenio Buses Tracker
Este proyecto es una aplicación web para registrar, buscar y eliminar buses en el sistema de transporte Transmilenio. Está desarrollada utilizando Node.js y Express para el backend, y JavaScript, HTML y CSS para el frontend. El objetivo del software es permitir a los usuarios gestionar la información de los buses de manera sencilla y eficiente.

## Universidad Pedagógica y Tecnológica de Colombia

### Autores

- **Pedro Eduardo Cruz López**
- **Juan Sebastián Zárate Ortiz**
- **Jhon Jairo Castro Mancipe**

## Características

- **Registro/Actualización de Buses**: Permite registrar nuevos buses o actualizar la hora de llegada de un bus existente.
- **Búsqueda de Buses**: Los usuarios pueden buscar un bus específico utilizando su placa.
- **Eliminación de Buses**: Los buses pueden ser eliminados del registro por su placa.

### Estructura del Proyecto

- **Transmilenio-App/**
  - **index.html**: Archivo HTML principal de la aplicación.
  - **buses.json**: Archivo JSON que almacena la información de los buses.
  - **scripts/**:
    - **server.js**: Archivo principal del servidor.
    - **script.js**: Archivo JavaScript para la lógica.
  - **styles/**:
    - **style.css**: Archivo CSS principal para la aplicación.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web en Node.js.
- **body-parser**: Middleware de Node.js para analizar el cuerpo de las solicitudes HTTP.
- **JavaScript, HTML, CSS**: Tecnologías frontend para la interfaz de usuario.
- **fs**: Módulo de Node.js para manejar el sistema de archivos.

## Requisitos y Configuración

### Requisitos Previos

- Node.js, express y npm instalados en tu sistema.

## Uso

1. Asegúrate de que tienes un archivo `buses.json` en el directorio raíz del proyecto. Este archivo debe tener el siguiente formato inicial:

   ```json
   {
     "buses": []
   }
2. Inicia el servidor:
   
   ```javascript
   node scripts/server.js
3. Abre tu navegador web y navega a http://localhost:3000.
4. Usa la interfaz para registrar, buscar o eliminar buses.
