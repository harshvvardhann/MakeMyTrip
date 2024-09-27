from django.db import models

class Bus(models.Model):
    id=models.AutoField(primary_key=True)
    fromLocation=models.CharField(max_length=122)
    toLocation=models.CharField(max_length=122)
    name = models.CharField(max_length=100)
    bus_type = models.CharField(max_length=100)  # Updated field name
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    review_count = models.IntegerField(default=0)  # Added new field
    reviews_texts = models.JSONField(default=list)  # Renamed field
    departure_time = models.TimeField()
    departure_date = models.DateField()
    duration = models.CharField(max_length=100)
    arrival_time = models.TimeField()
    arrival_date = models.DateField()
    seats_left = models.IntegerField()
    window_seats = models.IntegerField()
    original_price = models.DecimalField(max_digits=7, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=7, decimal_places=2)
    discount = models.DecimalField(max_digits=7, decimal_places=2)
    policies = models.JSONField(default=list)
    photos = models.JSONField(default=list)
    amenities = models.JSONField(default=list)
    pickups_drops = models.JSONField(default=list)

    def __str__(self):
        return self.name
