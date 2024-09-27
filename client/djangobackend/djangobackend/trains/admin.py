from django.contrib import admin
from .models import Train

@admin.register(Train)
class TrainAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'departureTime', 'departureStation', 'arrivalTime', 
        'arrivalStation', 'acPrice', 'nonAcPrice', 'sleeperPrice', 
        'availability'
    )
    search_fields = ('name', 'departureStation', 'arrivalStation')
    list_filter = ('availability',)
