import pymongo

# The User Data Access Object handles all interactions with the User collection.
class PlacesDAO:

        #sessions = db.sessions
        def __init__(self, db):
            self.db = db

        # creates a new user in the users collection
        def addPlace(self, username, place):

                #create the place dictionary
                placeDict = {
                    'username': username
                }

                placeDict.update(place.__dict__)

	        try:
	            self.db.places.insert(placeDict)
	        except pymongo.errors.OperationFailure:
	            print "oops, mongo error"
	            return False
	        except pymongo.errors.DuplicateKeyError as e:
	            print "oops, username is already taken"
	            return False
	
	        return True

        def getPlaces(self, username):
            try:
                places = self.db.places.find({'username': username});
                return places
            except Exceptionas:
                print "oops, mongo error"
                return None
