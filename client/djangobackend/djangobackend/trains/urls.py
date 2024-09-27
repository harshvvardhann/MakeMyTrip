from django.urls import path
from .views import TrainViewSet

urlpatterns = [
    path('trains/',TrainViewSet.as_view(),name='trains'),
]
