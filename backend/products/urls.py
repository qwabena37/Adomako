from rest_framework.routers import DefaultRouter

from .views import (ProductViewSet, CategoryViewSet, InquiryViewSet, DashboardAPIView ) 
from django.urls import path
router = DefaultRouter()

router.register(r'products',ProductViewSet, basename='product')
router.register(r'categories',CategoryViewSet, basename='category')
router.register(r'inquiries',InquiryViewSet, basename='inquiry')

urlpatterns = router.urls

urlpatterns += [
    path(
        "dashboard/",
        DashboardAPIView.as_view(), name="dashboard"
    )
]


router = DefaultRouter()

router.register(
    "products",
    ProductViewSet
)

router.register(
    "categories",
    CategoryViewSet
)

router.register(
    "inquiries",
    InquiryViewSet
)