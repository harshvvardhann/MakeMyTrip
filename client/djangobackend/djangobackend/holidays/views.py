from rest_framework import generics
from .models import HolidayPackage
from .serializers import HolidayPackageSerializer

class HolidayPackageListView(generics.ListCreateAPIView):
    serializer_class = HolidayPackageSerializer
    
    def get_queryset(self):
        fromCity=self.request.query_params.get('fromCity')
        toCity=self.request.query_params.get('toCity')
        queryset = HolidayPackage.objects.all()
        if fromCity and toCity:
            queryset = queryset.filter(fromCity=fromCity, toCity=toCity)
            
        return queryset
    
    
