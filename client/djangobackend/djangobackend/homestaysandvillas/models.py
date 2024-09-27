from django.db import models

class Property(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    distance_to_beach = models.DecimalField(max_digits=5, decimal_places=2)
    property_type = models.CharField(max_length=50)  # E.g., Hostel, Villa
    sleeps = models.IntegerField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    num_ratings = models.IntegerField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    taxes_and_fees = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.CharField(max_length=100)  # E.g., "INR 3494 Off"
    image_url = models.URLField()
    amenities = models.CharField(max_length=255)  # E.g., "Couple Friendly"
    booking_url = models.URLField()
    emi_offer = models.CharField(max_length=255)  # E.g., "Interest Free EMI Offer"

    def __str__(self):
        return f"{self.name} - {self.location} | {self.property_type} | ₹{self.price_per_night} per night"
