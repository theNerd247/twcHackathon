from flask import Flask, make_response
from bson.json_util import dumps
from models import note
import json
import pymongo
import UserDAO
import PlacesDAO
import Place

app = Flask(__name__)
app.debug = True

connection_string = "mongodb://localhost"
connection = pymongo.MongoClient(connection_string)
database = connection.blog

users = UserDAO.UserDAO(database)
places = PlacesDAO.PlacesDAO(database)

# send in some test data
pl = Place.Place();
pl.name = "Weather Channell Headquarters"
pl.address = "100 South Marietta Pkwy"
pl.coordinates = [(1,2)]
pl.id = "foo"
pl.iconPath = "static/img/twc_icons/30.png"
places.addPlace("bob",pl)
print pl.__dict__

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
    print "fetching places for " + username
    return dumps(places.getPlaces(username));

@app.route("/getAlerts/<user_id>")
def get_alerts_for_user(user_id):
    pass

if __name__ == "__main__":
    app.run()


