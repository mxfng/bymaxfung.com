from flask import Blueprint, render_template

music = Blueprint("music", __name__)

@music.route("/music")
def view_music():
    return render_template('music/music.html')

@music.route("/music/releases")
def view_releases():
    return render_template('music/releases.html')

@music.get("/music/<string:title>")
def display_release(title: str):
    return render_template(f'music/releases/{title}.html')