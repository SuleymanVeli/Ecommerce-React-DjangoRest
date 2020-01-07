from django.db import models


class Product(models.Model):    
    title = models.CharField(max_length=120 )
    description = models.TextField(blank = True, null = True)
    price = models.DecimalField(decimal_places=2, max_digits=20)
    active = models.BooleanField(default=True)
    category = models.ForeignKey('Category', blank=True, on_delete = models.CASCADE)
    features = models.ManyToManyField("Feature")
    image = models.ImageField(upload_to='product/',blank=True)

    def __str__(self):
        return str(self.title)


class Category(models.Model):
    title = models.CharField(max_length=120, unique=True)
    
    def __str__(self):
        return self.title

class Filter(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=120, unique=True)    
    
    def __str__(self):
        return str(self.title)

class Feature(models.Model):
    filterid = models.ForeignKey(Filter, related_name='features', on_delete=models.CASCADE)    
    title = models.CharField(max_length=120, unique=True)

    

    def __str__(self):
        return str(self.title)
        
    @property
    def name(self):
        return self.filterid.title


