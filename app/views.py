from flask import Blueprint, render_template
from datetime import datetime, date
from .lib import times

views = Blueprint("views", __name__)

@views.context_processor
def inject_now():
    return dict(now=datetime.utcnow())

@views.route("/")
@views.route("/home")
def home():
    return render_template('home.html')

@views.route("/about")
def about():
    return render_template('about.html')

@views.context_processor
def calculate_age():
    return dict(age=times.getCurrentAge(date.fromisoformat('1995-09-30')))

@views.route("/contact")
def contact():
    return render_template('contact.html')

@views.route("/blog")
def blog():
    return render_template('blog.html')

@views.route("/music")
def music():
    return render_template('music.html')

@views.route("/dev")
def dev():
    return render_template('dev.html')

@views.route("/projects")
def projects():
    return render_template('projects.html')