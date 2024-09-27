from django.db import models

# Create your models here.
class Hotel(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    rating = models.FloatField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    imageUrl = models.URLField(max_length=500)
    location = models.CharField(max_length=255)
    bedrooms = models.IntegerField()
    discount = models.CharField(max_length=100)

    def __str__(self):
        return self.name