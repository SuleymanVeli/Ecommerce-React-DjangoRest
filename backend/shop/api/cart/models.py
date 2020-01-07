from django.db import models
from datetime import datetime
from ..user.models import User
from django.db.models.signals import post_save

from ..product.models import Product

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return self.product
    
    @property
    def amount(self):
        return (self.quantity*self.product.price)

