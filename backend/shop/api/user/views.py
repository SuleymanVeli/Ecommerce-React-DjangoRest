from django.shortcuts import render
from .models import  User, Profile, Adress
from ..cart.models import Cart
from .serializers import UserSerializer, ProfileSerializer, AdressSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from . import permissions 
from django.shortcuts import get_list_or_404, get_object_or_404

class UserView(viewsets.ModelViewSet):    
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes=(permissions.UpdateOwnUser,)

    def perform_create(self, serializer):        
        serializer.save()
        print(serializer.data)


class LoginView(viewsets.ViewSet):
    serializer_class = AuthTokenSerializer

    def create(self, request):
        return ObtainAuthToken().post(request)

class ProfileView(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes=(permissions.PostOwnProfile, IsAuthenticated) 
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def list(self, request):        
        profile = Profile.objects.filter(user = request.user)
        serializer = ProfileSerializer(profile[0])
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class AdressView(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes=(permissions.PostOwnProfile, IsAuthenticated) 
    serializer_class = AdressSerializer
    queryset = Adress.objects.all()

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)




