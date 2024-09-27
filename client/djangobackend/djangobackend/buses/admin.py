from django.contrib import admin
from .models import Bus

@admin.register(Bus)
class BusAdmin(admin.ModelAdmin):
    list_display = ('name', 'bus_type', 'rating', 'departure_time', 'arrival_time')
