# myapp/views.py

from rest_framework import generics
from .models import Flight, Flight_details
from .serializers import FlightSerializer, FlightDetailsSerializer

class FlightList(generics.ListAPIView):
    serializer_class = FlightSerializer

    def get_queryset(self):
        origin = self.request.query_params.get('origin')
        destination = self.request.query_params.get('destination')
        
        queryset = Flight.objects.all()
        
        if origin and destination:
            queryset = queryset.filter(origin=origin, destination=destination)
        
        return queryset

class FlightDetailsList(generics.ListAPIView):
    serializer_class = FlightDetailsSerializer

    def get_queryset(self):
        origin = self.request.query_params.get('from_location')
        destination = self.request.query_params.get('to_location')
        
        queryset = Flight_details.objects.all()
        
        if origin and destination:
            queryset = queryset.filter(from_location=origin, to_location=destination)
        
        return queryset
