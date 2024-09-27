from django.contrib import admin
from .models import Property

@admin.register(Property)
class  PropertyAdmin(admin.ModelAdmin):
    list_display=[
        'name',
        'location',
        'distance_to_beach',
        'property_type',
        'sleeps',
        'rating',
        'num_ratings',
        'price_per_night',
        'taxes_and_fees',
        'discount',
        'image_url',
        'amenities',
        'booking_url',
        'emi_offer'
    ]

