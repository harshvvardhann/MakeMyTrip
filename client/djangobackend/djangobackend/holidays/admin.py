from django.contrib import admin
from .models import HolidayPackage

@admin.register(HolidayPackage)
class HolidayPackageAdmin(admin.ModelAdmin):
    list_display = ('title', 'price')
    search_fields = ('title', 'description')
