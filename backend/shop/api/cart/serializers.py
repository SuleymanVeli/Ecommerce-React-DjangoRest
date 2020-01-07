from rest_framework import serializers
from .models import  Cart 
from ..product.serializers import ProductSerializer


        
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id','product','quantity','amount']
        depth = 1
        

class CartUpdateSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Cart
        fields = ['id','product','quantity']
