from flask import Flask, render_template, send_from_directory, url_for
from os import path, listdir
import random

def create_app():
    app = Flask(__name__)

    from .routes.views import views
    from .routes.music import music
    from .routes.software import software
    from .lib import times

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(music)
    app.register_blueprint(software)

    @app.context_processor
    def inject_now():
        return dict(now=times.ptnow())
    
    @app.errorhandler(404)
    def page_not_found(e):
        def get_meme():
            choice = random.choice(listdir(path.join(app.root_path, 'static/img/meme')))
            return url_for('static', filename='img/meme/' + choice)
        return render_template('404.html', meme = get_meme()), 404

    
    @app.route('/favicon.ico')
    def favicon():
        from os import path
        return send_from_directory(
            path.join(app.root_path, 'static'),
            'favicon.ico',mimetype='image/vnd.microsoft.icon'
        )

    return app