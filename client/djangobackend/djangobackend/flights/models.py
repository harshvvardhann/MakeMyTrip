# myapp/models.py

from django.db import models

class Flight(models.Model):
    origin = models.CharField(max_length=10)  # IATA code for the origin airport (e.g., 'BLR')
    destination = models.CharField(max_length=10)  # IATA code for the destination airport (e.g., 'GOI')
    company = models.CharField(max_length=100)  # Airline company (e.g., 'IndiGo')
    departure_time = models.TimeField()  # Departure time (e.g., '07:30')
    arrival_time = models.TimeField()  # Arrival time (e.g., '09:50')
    duration = models.CharField(max_length=50)  # Flight duration (e.g., '2h 20m')
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Flight price (e.g., 6000.00)
    date = models.DateField()  # Flight date (e.g., '2023-09-19')
    cabin_class = models.CharField(max_length=50)  # Cabin class (e.g., 'Economy')

    def __str__(self):
        return f"{self.company} Flight from {self.origin} to {self.destination} on {self.date}"

    class Meta:
        verbose_name = 'Flight'
        verbose_name_plural = 'Flights' 

class Flight_details(models.Model):
    airline = models.CharField(max_length=100)
    departure_time = models.TimeField()
    duration = models.CharField(max_length=50)
    arrival_time = models.TimeField()
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stops = models.CharField(max_length=50)
    discount = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.airline} flight from {self.from_location} to {self.to_location} at {self.departure_time}"
