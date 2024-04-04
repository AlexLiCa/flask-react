# Usar una imagen base de Python
FROM python:3.8-slim-buster

# Instalar dependencias para PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo requirements.txt al contenedor y instalar las dependencias
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copiar el resto del código de la aplicación al contenedor
COPY . .

# Copiar el script de espera y hacerlo ejecutable
COPY wait-for-postgres.sh /usr/wait-for-postgres.sh
RUN chmod +x /usr/wait-for-postgres.sh

# Establecer la variable de entorno para la aplicación Flask
ENV FLASK_APP=app:create_app()
ENV FLASK_RUN_HOST=0.0.0.0

# Exponer el puerto en el que Flask se ejecutará
EXPOSE 5000

# Modificar el comando para usar el script de espera antes de iniciar la aplicación Flask
CMD ["/usr/wait-for-postgres.sh", "db", "flask", "run"]
