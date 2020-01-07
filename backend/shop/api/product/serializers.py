from rest_framework import serializers
from .models import Product,Category,Feature,Filter

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ['id','title','name']
        read_only_fields = ['id','title']

class FilterSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True)

    class Meta:
        model = Feature
        fields = ['id','title','features']
        read_only_fields = ['id','title','features']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']
        read_only_fields = ['id', 'title']

class ProductSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True)
    category = CategorySerializer()
    image = serializers.ImageField(max_length=None,use_url=True)

    class Meta:
        model = Product
        fields = ['id', 'title','description','price','category','active','features','image']
        read_only_fields = ['id', 'title','description','price','category','active','features','image']