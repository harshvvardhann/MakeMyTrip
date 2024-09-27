from rest_framework import generics
from .models import Hotel
from .serializers import HotelSerializer
from django_filters.rest_framework import DjangoFilterBackend

class HotelListCreateView(generics.ListCreateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['city', 'price', 'bedrooms', 'rating']
