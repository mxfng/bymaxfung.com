from flask import Blueprint, render_template, abort, url_for
from datetime import datetime
from os import path, listdir

music = Blueprint("music", __name__)

@music.route("/music")
def view_music():
    return render_template('music/music.html')

@music.get("/music/<string:title>")
def display_music(title: str):
    print(url_for('static', filename=f'img/galleries/{title}/*.jpeg'))
    print(path.join(
        music.root_path,
        url_for('static',
                filename=f'img/galleries/{title}')[1:]
        )
    )
    return render_template(f'music/discography/{title}.html')
    '''
    except:
        abort(404)
        '''