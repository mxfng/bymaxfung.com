from flask import Flask, render_template, send_from_directory
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

    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('404.html'), 404

    
    @app.route('/favicon.ico')
    def favicon():
        return send_from_directory(
            path.join(app.root_path, 'static'),
            'favicon.ico',mimetype='image/vnd.microsoft.icon'
        )

    return app