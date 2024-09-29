# serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _

User = get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])  # Hashing the password
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        # Check if values are received correctly
        print(f"Username: {username}, Password: {password}")

        if username and password:
            user = authenticate(request=self.context.get('request'), username=username, password=password)
            
            if not user:
                raise serializers.ValidationError(
                    _("Invalid username or password."),
                    code='authorization'
                )
        else:
            raise serializers.ValidationError(
                _("Both username and password are required."),
                code='authorization'
            )

        # Return the user if authenticated
        return user
        