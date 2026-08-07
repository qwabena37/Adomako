from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import (
    ProductSerializer,
    CategorySerializer,
    InquirySerializer
)
from rest_framework.parsers import (
    MultiPartParser,
    FormParser
)
from .models import Inquiry, Product, Category, Inquiry 
from .serializers import CategorySerializer, InquirySerializer, ProductSerializer
from rest_framework.views import APIView
from .permissions import IsAdminOrReadOnly
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import SAFE_METHODS
from rest_framework.permissions import BasePermission

class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]

    @action(
        detail=False,
        methods=["get"],
        url_path="featured"
    )
    def featured_products(self, request):

        products = Product.objects.filter(
            featured=True
        )[:10]

        serializer = ProductSerializer(
            products,
            many=True,
            context={
                "request": request
            }
        )

        return Response(serializer.data)

    parser_classes = (
        MultiPartParser,
        FormParser,
    )

    def get_serializer_context(self):
        return {"request": self.request}

    search_fields = [
        "name",
        "description"
    ]

    filterset_fields = [
        "category",
        "featured"
    ]

    ordering_fields = [
        "created_at",
        "price"
    ]

class IsAdminOrReadOnly(BasePermission):

    def has_permission(self, request, view):

        if request.method in SAFE_METHODS:
            return True

        return (
            request.user.is_authenticated
            and request.user.is_staff
        )

class InquiryViewSet(viewsets.ModelViewSet):

    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer 

    permission_classes = [IsAdminUser]

class CreateInquiryView(APIView):

    permission_classes = []

    def post(self, request):

        serializer = InquirySerializer(
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=400
        )


class DashboardAPIView(APIView):

    permission_classes = [IsAdminUser]

    def get(self, request):

        return Response({
            "products": Product.objects.count(),
            "categories": Category.objects.count(),
            "inquiries": Inquiry.objects.count()
        })

class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()

    serializer_class = CategorySerializer

    permission_classes = [
        IsAdminOrReadOnly
    ]