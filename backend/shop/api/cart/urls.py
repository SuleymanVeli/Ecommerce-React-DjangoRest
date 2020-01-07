from django.urls import path, include
from rest_framework import routers
from .views import CartView



router = routers.DefaultRouter()
router.register('cart', CartView,basename='cart')


urlpatterns = [   
   path('', include(router.urls)),
]

