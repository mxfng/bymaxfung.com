from flask import Blueprint, render_template, url_for, current_app
from os import path, listdir
import random

music = Blueprint("music", __name__)

@music.route("/music")
def view_music():
    def get_video():
        choice = random.choice(listdir(path.join(current_app.root_path, 'static/video')))
        return path.splitext(choice)[0]
    video = get_video()
    print(url_for('static', filename='video/' + video + '.webm'))
    return render_template('music/music.html', video = get_video())

@music.route("/music/releases")
def view_releases():
    return render_template('music/releases.html')

@music.get("/music/<string:title>")
def display_release(title: str):
    return render_template(f'music/releases/{title}.html')