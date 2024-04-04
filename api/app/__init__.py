from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import request, jsonify
from flask_cors import CORS

db = SQLAlchemy()


class Paquete(db.Model):
    __tablename__ = 'paquete'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    direccion = db.Column(db.String(255), nullable=False)
    estado = db.Column(db.String(50), nullable=False)
    destinatario = db.Column(db.String(100), nullable=False)

def init_routes(app):
    @app.route('/paquetes', methods=['POST'])
    def crear_paquete():
        datos = request.get_json()
        nuevo_paquete = Paquete(
            direccion=datos['direccion'], estado=datos['estado'], destinatario=datos['destinatario'])
        db.session.add(nuevo_paquete)
        db.session.commit()
        return jsonify({'mensaje': 'Paquete agregado exitosamente'}), 201

    @app.route('/paquetes', methods=['GET'])
    def obtener_paquetes():
        paquetes = Paquete.query.all()
        resultado = [{
            'id': paquete.id,
            'direccion': paquete.direccion,
            'estado': paquete.estado,
            'destinatario': paquete.destinatario
        } for paquete in paquetes]
        return jsonify(resultado)

    @app.route('/paquetes/<int:id>', methods=['GET'])
    def obtener_paquete(id):
        paquete = Paquete.query.get_or_404(id)
        resultado = {
            'id': paquete.id,
            'direccion': paquete.direccion,
            'estado': paquete.estado,
            'destinatario': paquete.destinatario
        }
        return jsonify(resultado)

    @app.route('/paquetes/<int:id>', methods=['PUT'])
    def actualizar_paquete(id):
        paquete = Paquete.query.get_or_404(id)
        datos = request.get_json()
        paquete.direccion = datos['direccion']
        paquete.estado = datos['estado']
        paquete.destinatario = datos['destinatario']
        db.session.commit()
        return jsonify({'mensaje': 'Paquete actualizado exitosamente'})

    @app.route('/paquetes/<int:id>', methods=['DELETE'])
    def eliminar_paquete(id):
        paquete = Paquete.query.get_or_404(id)
        db.session.delete(paquete)
        db.session.commit()
        return jsonify({'mensaje': 'Paquete eliminado exitosamente'})


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://usuario:contraseña@db/paquetesdb'

    db.init_app(app)

    with app.app_context():
        db.create_all()  # Crea las tablas si no existen
        init_routes(app)

        


    return app
