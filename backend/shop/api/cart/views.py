from django.shortcuts import render
from .models import Cart
from .serializers import CartSerializer, CartUpdateSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated,IsAdminUser,AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from ..user import permissions


class CartView(viewsets.ModelViewSet):  
    authentication_classes = (TokenAuthentication,)
    permission_classes=(permissions.PostOwnProfile,)    
    serializer_class = CartUpdateSerializer
    queryset = Cart.objects.all()

    def list(self, request):
        try:
            cart = Cart.objects.filter(user = request.user) 
        except Cart.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        serializer = CartSerializer(cart,many=True)
        return Response(serializer.data)

    def create(self, request):        
        serializer = CartUpdateSerializer(data = request.data)
        if serializer.is_valid():
            user = request.user
            product_id = serializer.data['product']
            quantity = serializer.data['quantity']
            try:
                cart = Cart.objects.get(user = user,product_id = product_id)
            except Cart.DoesNotExist:
                cart = None
            if cart != None:
                cart.quantity = cart.quantity + quantity
                cart.save()
            else:
                data = Cart(user = user, product_id = product_id, quantity = quantity)
                data.save()
            
            carts = Cart.objects.filter(user = request.user) 
            cartserializer = CartSerializer(carts,many=True)
            return Response(cartserializer.data ,status=status.HTTP_201_CREATED)
        else:
             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

    

  
    

    
        