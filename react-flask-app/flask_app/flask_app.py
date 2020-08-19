
from flask import Flask, request, jsonify, send_from_directory, abort
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import json
import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from werkzeug.security import check_password_hash, generate_password_hash

from datetime import datetime
 

app = Flask(__name__, static_folder="../build", static_url_path='/')

# username="juicyjames"
# password="hju87ijpolispoeal23"
# hostname="juicyjames.mysql.pythonanywhere-services.com"
# databasename="juicyjames$website_db"
# SQLALCHEMY_DATABASE_URI = f"mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}"

# #uri database location
# app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
# app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# app.secret_key = "something only you know"

# LOCAL DB

# LOCAL DB
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'
#Initiat Database
db = SQLAlchemy(app)


class Denver_311(db.Model):
    __tablename__ = "denver"
    pkey = db.Column(db.Integer, primary_key=True)
    summary = db.Column(db.String(4096))
    source = db.Column(db.String(256))
    agency = db.Column(db.String(256))
    date = db.Column(db.String(24))
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)

    def __repr__(self):
        return f"gps_locations('{self.latitude}','{self.longitude}')"


def df_to_geojson(merged_df, lat='latitude', lon='longitude'):

    geojson = {'type': 'FeatureCollection', 'features': []}

    # loop through each row in the dataframe and convert each row to geojson format
    for _, row in merged_df.iterrows():

        # create a feature template to fill in
        feature = {'type': 'Feature',
                   'properties': {
                       'Agency': '',
                       'Case Summary': '',
                       'Case Source': '',
                       'Case Date': ''
                   },
                   'geometry': {'type': 'Point',
                                'coordinates': []}}

        # fill in the coordinates
        feature['geometry']['coordinates'] = [row[lon], row[lat]]
        feature['properties']['Agency'] = row['agency']
        feature['properties']['Case Summary'] = row['summary']
        feature['properties']['Case Source'] = row['source']
        feature['properties']['Case Date'] = row['date']
        # for each column, get the value and add it as a new feature property
        # for prop in properties:
        #     feature['properties'][prop] = row[prop]

        # add this feature (aka, converted dataframe row) to the list of features inside our dict
        geojson['features'].append(feature)

    return geojson


class Gps_locations(db.Model):
    __tablename__ = "gps_locations"
    latitude = db.Column(db.Float, primary_key=True)
    longitude = db.Column(db.Float, nullable=False)

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
        else:
            return jsonify(300)
    #we have to return something.
    return jsonify(200)

@app.route("/uploads/<path:filename>", methods=['GET'])
def uploads(filename):
    try:
        return send_from_directory(directory='../build/uploads', filename=filename, as_attachment=True)
    except FileNotFoundError:
        
        # abort(404)
        return jsonify(300)
@app.route('/google_data', methods=["GET"])
def google_data():
    empDict = {'latitude': [],
               'longitude': []}

    result = Gps_locations.query.all()
    for row in result:
        empDict['latitude'].append(row.latitude)
        empDict['longitude'].append(row.longitude)

    return jsonify(empDict)
@app.route('/denver311')
def denver311():

    data = {
        "summary": [],
        "source": [],
        "agency": [],
        "date": [],
        "longitude": [],
        "latitude": []
    }
    result = Denver_311.query.all()

    for row in result:
        data['summary'].append(row.summary)
        data['source'].append(row.source)
        data['agency'].append(row.agency)
        data['date'].append(row.date)
        data['longitude'].append(row.longitude)
        data['latitude'].append(row.latitude)
    df = pd.DataFrame.from_dict(data)
    geojson_dict = df_to_geojson(df)
    geojson_str = json.dumps(geojson_dict, indent=2)

    return geojson_str
    
if __name__ == "__main__":
    app.secret_key = 'super secret key'
    app.config['_session_TYPE'] = 'filesystem'
    app.run(debug=True)
# if __name__ == '__main__':
#     app.run(port=5000,debug=True) 