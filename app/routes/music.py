from flask import Blueprint, request, render_template
from datetime import datetime

music = Blueprint("music", __name__)

@music.route("/music")
def view_music():
    return render_template('music/music.html')

@music.get("/music/<string:title>")
def display_music(title: str):
    return "Display music page."

@music.route("/admin/music", methods=["GET", "POST"])
def create_music():
    if request.method == "POST":
        pass
    return "Create music page."