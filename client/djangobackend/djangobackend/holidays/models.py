from django.db import models

class HolidayPackage(models.Model):
    fromCity=models.CharField(max_length=122)
    toCity=models.CharField(max_length=122)
    title = models.CharField(max_length=255)
    image = models.URLField(max_length=2000)
    description = models.TextField()
    price = models.CharField(max_length=100)
    highlights = models.JSONField()

    def __str__(self):
        return self.title
