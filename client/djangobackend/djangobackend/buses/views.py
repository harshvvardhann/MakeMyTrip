from rest_framework import generics
from .models import Bus
from .serializers import BusSerializer

class BusListCreateView(generics.ListCreateAPIView):
    serializer_class = BusSerializer
    
    def get_queryset(self):
        queryset = Bus.objects.all()
        fromLocation=self.request.query_params.get('fromLocation')
        toLocation=self.request.query_params.get('toLocation')
        if fromLocation and toLocation:
            queryset = queryset.filter(fromLocation=fromLocation, toLocation=toLocation)
        return queryset
    
