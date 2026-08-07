from rest_framework import serializers
from .models import Product, Category, Inquiry


class ProductSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(
        required=False,
        use_url=True
    )

    class Meta:
        model = Product
        fields = "__all__"

class ProductHomeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "image",
            "price",
            "description",
            "featured"
        ]

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class InquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = Inquiry
        fields = "__all__"