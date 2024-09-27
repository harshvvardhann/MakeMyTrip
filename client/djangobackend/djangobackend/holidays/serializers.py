from rest_framework import serializers
from .models import HolidayPackage

class HolidayPackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HolidayPackage
        fields = '__all__'
