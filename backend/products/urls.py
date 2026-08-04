from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import (
    ProductViewSet,
    CategoryViewSet,
    InquiryViewSet,
    DashboardAPIView
)


router = DefaultRouter()


router.register(
    r"products",
    ProductViewSet,
    basename="product"
)

router.register(
    r"categories",
    CategoryViewSet,
    basename="category"
)

router.register(
    r"inquiries",
    InquiryViewSet,
    basename="inquiry"
)


urlpatterns = [

    path(
        "",
        include(router.urls)
    ),

    path(
        "dashboard/",
        DashboardAPIView.as_view(),
        name="dashboard"
    ),

]