from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from .lib import times

def create_app():
    app = Flask(__name__)

    from .routes.views import views
    from .routes.music import music

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(music)

    @app.context_processor
    def inject_now():
        return dict(now=times.ptnow())

    return app