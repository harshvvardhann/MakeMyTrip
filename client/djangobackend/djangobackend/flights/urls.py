# myapp/urls.py

from django.urls import path
from .views import FlightList, FlightDetailsList

urlpatterns = [
    path('flights/', FlightList.as_view(), name='flight_list'),
    path('flight-details/', FlightDetailsList.as_view(), name='flight_details_list'),
]
