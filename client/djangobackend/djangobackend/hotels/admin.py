from django.contrib import admin
from .models import Hotel

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'rating', 'price', 'location', 'bedrooms', 'discount')
    search_fields = ('name', 'city', 'location')
    list_filter = ('city', 'rating', 'price')
    ordering = ('name',)
