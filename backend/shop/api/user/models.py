from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin ,BaseUserManager
from datetime import datetime
from django.db.models.signals import post_save

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        email =  self.normalize_email(email)
        user = self.model(name = name ,email = email)         
        user.set_password(password)
        
        user.save(using=self._db)
                
        return user

    def create_superuser(self, email, name, password):
        user = self.create_user(email,name, password)

        user.is_superuser = True
        user.is_staff = True              
        user.save(using=self._db)
        return user

class User(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=False )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
       

    objects = UserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['name']

    def __str__(self):              
        return self.email

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)    
    name = models.CharField(max_length=255,default="")
    surmane = models.CharField(max_length=255,default="")
    image = models.ImageField(upload_to='profile/',blank=True)    

    def __str__(self):              
        return self.name
        
    @property
    def email(self):
        return self.user.email

class Adress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=255,default="")

    def __str__(self):              
        return self.text

def create_profile(sender, **kwargs):
    if kwargs['created']:
        profile = Profile.objects.create(user = kwargs['instance'])

post_save.connect(create_profile,sender = User)
