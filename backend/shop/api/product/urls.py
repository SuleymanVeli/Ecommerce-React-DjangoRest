from django.urls import path, include
from .views import ProductView,CategoryView,FilterView
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings

router = routers.DefaultRouter()

router.register('product', ProductView)
router.register('category', CategoryView)
router.register('filter', FilterView)

urlpatterns = [
   path('', include(router.urls)),  
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
