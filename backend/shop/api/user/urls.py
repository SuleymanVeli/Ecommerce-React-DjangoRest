from django.urls import path, include
from .views import UserView,  ProfileView, LoginView
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()

router.register('register', UserView)
router.register('login', LoginView, basename='login')
router.register('profile', ProfileView, basename='profile')

urlpatterns = [
   path('', include(router.urls)),   
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
