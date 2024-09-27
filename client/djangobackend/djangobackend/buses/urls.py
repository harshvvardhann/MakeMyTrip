from django.urls import path
from .views import BusListCreateView

urlpatterns = [
    path('buses/', BusListCreateView.as_view(), name='bus-list-create'),
]
