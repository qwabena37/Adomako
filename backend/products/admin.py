from django.contrib import admin
from products.models import Inquiry
from products.models import Inquiry, Category, Product


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Inquiry)
