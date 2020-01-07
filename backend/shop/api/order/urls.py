from django.urls import path, include
from rest_framework import routers
from .views import OrderView,OrderItemView

router = routers.DefaultRouter()
router.register('order', OrderView,basename='order')
router.register('orderitem', OrderItemView,basename='orderitem')

urlpatterns = [   
   path('', include(router.urls)),
]

