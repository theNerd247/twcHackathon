import AlertInfo

class Place:
    """The Places object representing data for a given location"""

    def __init__(self):
        """initializes a blank Places object """

        self.name = ""
        self.address = ""
        self.coordinates = []
        self.weatherHours = []
        self.currentHour = 0
