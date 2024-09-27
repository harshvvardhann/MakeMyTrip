from django.db import models

class Train(models.Model):
    name = models.CharField(max_length=255)
    departureTime = models.TimeField()
    departureDay = models.CharField(max_length=10)
    departureStation = models.CharField(max_length=255)
    departureCode = models.CharField(max_length=10)
    arrivalTime = models.TimeField()
    arrivalDay = models.CharField(max_length=10)
    arrivalStation = models.CharField(max_length=255)
    arrivalCode = models.CharField(max_length=10)
    travelTime = models.CharField(max_length=20)
    acSeatNumber = models.CharField(max_length=20)
    acCoachNumber = models.CharField(max_length=10)
    acPrice = models.DecimalField(max_digits=10, decimal_places=2)
    nonAcSeatNumber = models.CharField(max_length=20)
    nonAcCoachNumber = models.CharField(max_length=10)
    nonAcPrice = models.DecimalField(max_digits=10, decimal_places=2)
    sleeperSeatNumber = models.CharField(max_length=20)
    sleeperCoachNumber = models.CharField(max_length=10)
    sleeperPrice = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.CharField(max_length=20)
    route = models.JSONField()  # Stores the list of stations
    image=models.URLField()

    def __str__(self):
        return self.name
