from rest_framework import generics
from .models import Train
from .serializers import TrainSerializer

class TrainViewSet(generics.ListAPIView):
    serializer_class = TrainSerializer
    
    def get_queryset(self):
        arrivalStation=self.request.query_params.get('arrivalStation')
        departureStation=self.request.query_params.get('departureStation')
        queryset=Train.objects.all()
        if arrivalStation and departureStation:
            queryset = Train.objects.filter(arrivalStation=arrivalStation,departureStation=departureStation)
        return queryset
    
