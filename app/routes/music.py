from flask import Blueprint, render_template, abort
from datetime import datetime

music = Blueprint("music", __name__)

@music.route("/music")
def view_music():
    return render_template('music/music.html')

@music.get("/music/<string:title>")
def display_music(title: str):
    try:
        return render_template(f'music/discography/{title}.html')
    except:
        abort(404)