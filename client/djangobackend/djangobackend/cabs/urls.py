# cabs/urls.py
from django.urls import path
from .views import CabListView

urlpatterns = [
    path('cabs/', CabListView.as_view(), name='cab-list'),
]
