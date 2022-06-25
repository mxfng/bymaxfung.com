from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from datetime import datetime

def create_app():
    app = Flask(__name__)

    from .routes.views import views
    from .routes.music import music

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(music)

    return app