from django.urls import path
from django.shortcuts import render
from .views import PropertyList

urlpatterns = [
    path('homestays/', PropertyList.as_view(), name='homestays_and_v')
]
