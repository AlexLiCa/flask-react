# Proyecto Flask-React

Este proyecto es una aplicación web full-stack que combina un backend Flask con un frontend React, facilitando el desarrollo y despliegue de aplicaciones modernas con Python y JavaScript.

## Características

- **Backend Flask**: Una API RESTful que gestiona la lógica del negocio y se comunica con una base de datos PostgreSQL.
- **Frontend React**: Una interfaz de usuario dinámica que consume la API Flask para mostrar y enviar datos.
- **Dockerizado**: Configuración de Docker y Docker Compose para un despliegue sencillo y rápido.

## Estructura del Proyecto

Flask-React/
│
├── api/
│ ├── Dockerfile
│ ├── requirements.txt
│ └── (otros archivos y directorios de Flask)
│
├── front/
│ ├── Dockerfile
│ ├── package.json
│ └── (otros archivos y directorios de React)
│
├── docker-compose.yml
└── .gitignore


## Requisitos Previos

- Docker y Docker Compose
- Git (opcional, para clonar el repositorio)

## Configuración Inicial

1. **Clonar el Repositorio** (opcional):

```bash
git clone https://github.com/usuario/proyecto-flask-react.git
cd proyecto-flask-react
