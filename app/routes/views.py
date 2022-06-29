from flask import Blueprint, render_template, url_for
from datetime import date
from ..lib import randomAbout, times

views = Blueprint("views", __name__)

@views.route("/")
@views.route("/home")
def home():
    return render_template('home.html')

@views.route("/about")
def about():
    pixel_image = url_for('static', filename='img/about.jpg')
    pixel_image_small = url_for('static', filename='img/about-mobile.jpg')
    return render_template(
        'about.html',
        fact=randomAbout.random_fact(),
        action=randomAbout.random_action(),
        pixel_image=pixel_image,
        pixel_image_small=pixel_image_small,
    )

@views.context_processor
def calculate_age():
    return dict(age=times.agenow('1995-09-30'))

@views.route("/contact")
def contact():
    return render_template('contact.html')

@views.route("/blog")
def blog():
    return render_template('blog.html')

@views.route("/dev")
def dev():
    return render_template('dev.html')

@views.route("/projects")
def projects():
    return render_template('projects.html')
