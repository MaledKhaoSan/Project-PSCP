# Flask
from flask import Flask, render_template, request, redirect, url_for, json, flash
from flask import Flask, render_template, request
import json
app = Flask(__name__, template_folder='templates')


# json for test only
import os

# Python.file Import
from _getRandom import *
from _sendEmail import *

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/', methods =["GET", "POST"])
def homepage():
    if request.method == "POST":
        if request.form.get('custom_email_submit') == 'GET_EMAIL':
            username_arrias = request.form.get("username_arrias")
            email_receiver = request.form.get("email_receiver")
            user_message = request.form.get("user_message")
            email_flowers = request.form.get("email_flowers")
            sendCustomEmail(username_arrias, email_receiver, user_message, email_flowers)
            
        elif request.form.get('random_flower_repeat') == 'REPEAT':
            createRandomSortedList()

        elif request.form.get('get_randomInput') == 'GET_RANDOM_INPUT':
            random_output = request.form.get("random_output")
            myrandom_data = ((random_output).split())
            createRandomWithInput(myrandom_data[2], myrandom_data[3])
        return (''), 204

    else:
        return render_template('index.html')
if __name__ == '__main__':
    app.run(debug=True)

