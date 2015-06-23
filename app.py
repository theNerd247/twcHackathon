from flask import Flask, make_response
from models import note
import json

app = Flask(__name__)
app.debug = True


@app.route("/app")
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

if __name__ == "__main__":
    app.run()