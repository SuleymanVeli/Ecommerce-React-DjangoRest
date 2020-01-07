from django.contrib import admin
from django.contrib.auth.models import Group
from .models import User, Cart, Profile, Product, Category ,Feature,Filter,Order,OrderItem
from django.utils.html import format_html

admin.site.register(User)
admin.site.register(Cart)
admin.site.unregister(Group)
admin.site.register(Profile)
admin.site.register(Feature)
admin.site.register(Category)
admin.site.register(Filter)
admin.site.register(Order)
admin.site.register(OrderItem)

class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'image','change_button','delete_button']
    def change_button(self, obj):
        return format_html('<a class="btn" href="/admin/shop/product/{}/change/">Change</a>', obj.id)
    
    def delete_button(self, obj):
        return format_html('<a class="btn" href="/admin/shop/product/{}/delete/">Delete</a>', obj.id)
    
    class Meta:
        model = Product

admin.site.register(Product, ProductAdmin)