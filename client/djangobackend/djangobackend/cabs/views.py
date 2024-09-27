# cabs/views.py
from rest_framework import generics
from .models import Cab
from .serializers import CabSerializer

class CabListView(generics.ListAPIView):
    serializer_class = CabSerializer
    def get_queryset(self):
        queryset = Cab.objects.all()
        fromLocation=self.request.query_params.get('fromLocation')
        toLocation=self.request.query_params.get('toLocation')
        if fromLocation and toLocation:
            queryset = queryset.filter(fromLocation=fromLocation, toLocation=toLocation)
        return queryset