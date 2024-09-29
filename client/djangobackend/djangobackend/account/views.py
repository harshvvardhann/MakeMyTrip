# views.py
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserCreateSerializer, UserLoginSerializer
from rest_framework.permissions import AllowAny

# signup
class UserCreateView(generics.CreateAPIView):
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny] # Allow anyone to access signup


# login
class UserLoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'username': user.username,
        }, status=status.HTTP_200_OK)
