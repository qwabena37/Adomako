from django.db import models


class Category(models.Model):

    name = models.CharField(
        max_length=100,
        unique=True
    )

    logo = models.ImageField(
        upload_to="categories/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name


class Product(models.Model):

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="products"
    )

    name = models.CharField(
        max_length=255
    )

    description = models.TextField()

    image = models.ImageField(
        upload_to="products/"
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0
    )

    stock = models.IntegerField(
        default=0
    )

    featured = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name


class Inquiry(models.Model):

    customer_name = models.CharField(
        max_length=255
    )

    phone = models.CharField(
        max_length=50
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE
    )

    message = models.TextField()

    status = models.CharField(
        max_length=20,
        default="Pending"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.customer_name} - {self.product.name}"