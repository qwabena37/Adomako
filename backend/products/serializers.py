from rest_framework import serializers
from .models import Category, Inquiry, Product

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model=Product
        fields='__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"

class InquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = Inquiry
        fields = "__all__"

