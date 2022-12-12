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
            print(username_arrias, email_receiver, user_message)

            # email_inerhtmlData = request.form['bouquet_email_submit']
            # sendCustomEmail(email_inerhtmlData)

        elif request.form.get('random_flower_submit') == 'GET_SUMBIT':
        # elif list(request.form.keys())[1] == 'random_flower_submit':
            username = request.form.get("username")
            receiver = request.form.get("receiver")
            createRandomSortedList()
            
        elif request.form.get('random_flower_repeat') == 'REPEAT':
            mytest = createRandomSortedList()
            print(mytest[0])


        

            # SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
            # _url = os.path.join(SITE_ROOT, "static/data", "taiwan.json")
            # data = json.load(open(json_url))
            # print(data)


            # return render_template('index.html', value= mytest[0])
            # return ('index.html', value= mytest[0]), 204
            # return mytest[0]
        return (''), 204

    else:
        return render_template('index.html')






@app.route('/emailtemplate', methods =["GET", "POST"])
def emailtemplate():

    return render_template("emailtemplate.html")
        

    

if __name__ == '__main__':
    app.run(debug=True)

