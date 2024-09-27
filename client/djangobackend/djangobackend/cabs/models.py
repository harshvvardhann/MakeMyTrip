# cabs/models.py
from django.db import models

class Cab(models.Model):
    id=models.AutoField(primary_key=True)
    fromLocation=models.CharField(max_length=122)
    toLocation=models.CharField(max_length=122)
    cab_name = models.CharField(max_length=100)
    cab_type = models.CharField(max_length=50)  # Sedan, SUV
    fuel_type = models.CharField(max_length=20)  # CNG, Petrol, Diesel
    seating_capacity = models.IntegerField()
    is_ac = models.BooleanField(default=True)
    distance_included = models.IntegerField()  # e.g. 149 kms included
    extra_km_fare = models.DecimalField(max_digits=5, decimal_places=2)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)  # rating from 0-5

    def __str__(self):
        return self.cab_name
