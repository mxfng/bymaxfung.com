from flask import Blueprint, request, render_template
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
        return render_template('404.html')