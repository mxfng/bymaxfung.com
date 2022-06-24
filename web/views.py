from flask import Blueprint, render_template

views = Blueprint("views", __name__)

@views.route("/")
@views.route("/home")
def home():
    return render_template('home.html')

@views.route("/about")
def about():
    return render_template('about.html')

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

@views.route("/gallery")
def gallery():
    return render_template('gallery.html')