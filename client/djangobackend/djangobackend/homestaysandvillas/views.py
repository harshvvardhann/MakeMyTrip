from rest_framework import generics
from .models import Property
from .serializers import HomeStaysAndVillasSerializer

class PropertyList(generics.ListAPIView):
    serializer_class = HomeStaysAndVillasSerializer

    def get_queryset(self):
        location = self.request.query_params.get('location')
        queryset = Property.objects.all()
        if location:
            queryset = queryset.filter(location=location)

        return queryset
