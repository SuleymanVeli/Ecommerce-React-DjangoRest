from rest_framework import serializers
from .models import User, Profile ,Adress

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id",'email','name','password',]
        extra_kwargs = {'password': {'write_only': True}}
        depth = 1

    def create(self, validated_data):
        user = User(
            email= validated_data['email'],
            name= validated_data['name']          
        )   
        user.set_password(self.validated_data['password'])
        user.save()
        return user

class ProfileSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None,use_url=True)
    class Meta:       
        model = Profile
        fields = ["id",'name','surmane','image','email']       

class AdressSerializer(serializers.ModelSerializer):    
    class Meta:       
        model = Adress
        fields = ["id",'user','text']
        extra_kwargs = {'user': {'read_only': True}}

