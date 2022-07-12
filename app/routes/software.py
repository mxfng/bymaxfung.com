from flask import Blueprint, render_template

software = Blueprint("software", __name__)

@software.route("/software")
def view_software():
    return render_template('software/software.html')