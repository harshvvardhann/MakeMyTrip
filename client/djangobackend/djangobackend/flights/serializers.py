# myapp/serializers.py

from rest_framework import serializers
from .models import Flight, Flight_details

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = '__all__'

class FlightDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight_details
        fields = '__all__'
