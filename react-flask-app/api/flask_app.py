
from flask import Flask, request, jsonify, send_from_directory, abort
from flask_sqlalchemy import SQLAlchemy

import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from werkzeug.security import check_password_hash, generate_password_hash

from datetime import datetime
 

app = Flask(__name__, static_folder="../build", static_url_path='/')

# LOCAL DB
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'
#Initiat Database
db = SQLAlchemy(app)

#Query the DB directly with the User Object
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(128))
    email = db.Column(db.String(128), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    created = db.Column(db.String(128))

@app.route('/')
def index():

    # users = User.query.all()
    # print(users)
    return app.send_static_file('index.html')

@app.route('/login', methods=["POST"])
def login():
    # Catch any errors but needs to be reset evertime so I created an empty list.
    errors = []
    # Initiate ID == 0, we do not have a user.
    user_id = 0
    #Double check we have a post
    if request.method == 'POST':

        #Pull data out of post request
        email = request.get_json()['email']
        password = request.get_json()['password']

        #Search DB for login credentials
        #Can SQL queries get through? Do I need a Validation?
        user = User.query.filter_by(email=email).first()

        
        user_id = user.id

        #True if we found a user in our DB
        if user:
            # Password hasher and check DB
            if check_password_hash(user.password_hash, password):

                


                #pass the userID back to the React post
                return jsonify(user_id)
            # User name was correct but password was not
            else:
                # Catch error
                errors.append("Password or Email is incorrect.")
                #Send errors back to the post request
                return jsonify(errors)
        #Username/Email was not in DB
        else:
            #Catch Errors
            errors.append("Email or Password is incorrect.")
            #Send errors back to DB
            return jsonify(errors)

@app.route('/register', methods=['POST'])
def register():
     # Double check we have a post request
    if request.method == 'POST':
        # I did not use forms, just get the requested data from the html.
        # The css is htmlfor, form-control and the name of the input.
        print(request.get_json())
        first_name = request.get_json()['first_name']
        last_name = request.get_json()['last_name']
        email = request.get_json()['email']
        password = generate_password_hash(request.get_json()['password'])
        
        created = datetime.now()

        #Emails are usernames so we need to check if an Email already exists in the DB
        if User.query.filter_by(email=email).first() == None:

            # new user variable to catch the user is still a User object
            new_user = User(first_name=first_name, last_name=last_name,
                            email=email, password_hash=password, created=created)

            # add the new user to the database
            db.session.add(new_user)
            db.session.commit()
    #we have to return something.
    return jsonify(200)

@app.route("/uploads/<path:filename>", methods=['GET'])
def uploads(filename):
    try:
        return send_from_directory(directory='/uploads', filename=filename, as_attachment=True)
    except FileNotFoundError:
        
        # abort(404)
        return jsonify(300)


if __name__ == '__main__':
    app.run(port=5000,debug=True) 