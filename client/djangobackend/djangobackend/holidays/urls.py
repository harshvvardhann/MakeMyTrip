from django.urls import path
from .views import HolidayPackageListView

urlpatterns = [
    path('holidays/', HolidayPackageListView.as_view(), name='holiday-package-list'),
]
