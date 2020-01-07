from django.shortcuts import render
from .models import Product,Category,Filter
from .filters import ProductFilter,FiltersFilter
from .serializers import ProductSerializer,CategorySerializer,FilterSerializer
from rest_framework import viewsets
from .pagination import ProductPagination

class ProductView(viewsets.ModelViewSet):    
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filterset_class = ProductFilter
    pagination_class = ProductPagination

class CategoryView(viewsets.ModelViewSet):    
    serializer_class = CategorySerializer
    queryset = Category.objects.all()    


class FilterView(viewsets.ModelViewSet):    
    serializer_class = FilterSerializer
    queryset = Filter.objects.all()
    filterset_class = FiltersFilter   