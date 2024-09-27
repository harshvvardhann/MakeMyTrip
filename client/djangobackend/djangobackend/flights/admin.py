# myapp/admin.py

from django.contrib import admin
from .models import Flight, Flight_details

@admin.register(Flight)
class FlightAdmin(admin.ModelAdmin):
    list_display = [
        'company',
        'origin',
        'destination',
        'departure_time',
        'arrival_time',
        'duration',
        'price',
        'date',
        'cabin_class'
    ]

@admin.register(Flight_details)
class FlightDetailsAdmin(admin.ModelAdmin):
    list_display = ('airline', 'departure_time', 'from_location', 'to_location', 'price', 'stops', 'discount')
    search_fields = ('airline', 'from_location', 'to_location')
