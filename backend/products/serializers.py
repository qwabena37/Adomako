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

    def to_representation(self, instance):
        data = super().to_representation(instance)

        request = self.context.get("request")

        if instance.image and request:
            data["image"] = request.build_absolute_uri(
                instance.image.url
            )

        return data


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = "__all__"