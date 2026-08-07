from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
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
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter

class HealthCheckView(APIView):

    permission_classes = []

    def get(self, request):
        return Response({
            "status": "ok"
        })

class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.select_related(
        "category"
    ).all()

    serializer_class = ProductSerializer

    permission_classes = [
        IsAdminOrReadOnly
    ]

    parser_classes = (
        MultiPartParser,
        FormParser,
    )

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        "name",
        "description",
    ]

    filterset_fields = [
        "category",
        "featured",
    ]

    ordering_fields = [
        "created_at",
        "price",
    ]

    def get_serializer_context(self):
        return {
            "request": self.request
        }

    @action(
        detail=False,
        methods=["get"],
        url_path="featured"
    )
    def featured_products(self, request):

        products = Product.objects.filter(
            featured=True
        ).order_by("-created_at")[:10]

        serializer = ProductSerializer(
            products,
            many=True,
            context={"request": request}
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

    permission_classes = [AllowAny]

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

    queryset = Category.objects.order_by("name")

    serializer_class = CategorySerializer

    permission_classes = [
        IsAdminOrReadOnly
    ]

    filter_backends = [
    DjangoFilterBackend,
    SearchFilter,
    OrderingFilter,
]