from flask import Flask, make_response
from bson.json_util import dumps
from models import note
import json
import pymongo
import UserDAO
import PlacesDAO
import Place
import WeatherHour
import AlertInfo
import WeatherCamLink

app = Flask(__name__)
app.debug = True

connection_string = "mongodb://localhost"
connection = pymongo.MongoClient(connection_string)
database = connection.blog

users = UserDAO.UserDAO(database)
places = PlacesDAO.PlacesDAO(database)

# send in some test data
@app.route("/samples")
def addSamplePlaces():
    return make_response(open('tstData.json').read())

@app.route("/")
def app_endpoint():
    return make_response(open('templates/index.html').read())

@app.route("/notes")
def get_notes():
    notes = []
    list = [
        {'a': 1, 'b': 2},
        {'a': 5, 'b': 10}
    ]
    for x in xrange(0,10):
        n = note()
        n.title = "Title_" + str(x)
        notes.append(n.__dict__)
        return json.dumps(notes)

@app.route("/getPlace/<username>")
def get_place(username):
    return dumps(places.getPlaces(username));

@app.route("/getAlerts/<user_id>")
def get_alerts_for_user(user_id):
    pass

if __name__ == "__main__":
    app.run()
