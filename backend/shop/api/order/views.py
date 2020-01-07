from django.shortcuts import render
from .models import Order ,OrderItem
from ..cart.models import Cart
from .serializers import OrderSerializer, OrderCreateSerializer,OrderItemSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly,IsAuthenticated,IsAdminUser,AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from ..user import permissions 
from .pagination import OrderPagination

class OrderView(viewsets.ModelViewSet):  
    authentication_classes = (TokenAuthentication,)
    permission_classes=(permissions.PostOwnProfile,IsAuthenticated,)    
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    pagination_class = OrderPagination

    def get_queryset(self):      
        user = self.request.user
        return  Order.objects.filter(user=user)
         
    
    
    def create(self,request):
        user = request.user
        carts = Cart.objects.filter(user = user)
        carttotal = 0
        for cart in carts:
            carttotal += cart.quantity * cart.product.price

        serializer = OrderCreateSerializer(data = request.data)

        if serializer.is_valid():
            order= Order()
            order.name = serializer.data['name']
            order.street = serializer.data['street']
            order.city = serializer.data['city']
            order.state = serializer.data['state']
            order.zipcode = serializer.data['zipcode']
            order.phone = serializer.data['phone']
            order.user = user
            order.total = carttotal
            order.save()        

            for cart in carts:
                item = OrderItem()
                item.order_id = order.id
                item.product_id = cart.product_id
                item.user = user
                item.quantity = cart.quantity
                item.price = cart.product.price
                item.total = cart.amount
                item.save()
            Cart.objects.filter(user = user).delete()
            return Response(status = status.HTTP_201_CREATED)
        else:
             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderItemView(viewsets.ModelViewSet):  
    authentication_classes = (TokenAuthentication,)
    permission_classes=(permissions.PostOwnProfile,)    
    serializer_class = OrderItemSerializer
    queryset = OrderItem.objects.all()