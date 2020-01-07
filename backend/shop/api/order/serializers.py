from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.ModelSerializer):    
    class Meta:
        model = OrderItem
        fields = ['id','product','quantity','price','total']

class OrderSerializer(serializers.ModelSerializer): 
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = [ 'id','name','street','city','state','zipcode','note', 'total','items','status']
        

class OrderCreateSerializer(serializers.ModelSerializer): 

    class Meta:
        model = Order
        fields = ['name','street','city','state','zipcode','phone']


    