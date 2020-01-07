from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('shop.api.cart.urls')),
    path('', include('shop.api.product.urls')),
    path('', include('shop.api.user.urls')),
    path('', include('shop.api.order.urls')),
]
