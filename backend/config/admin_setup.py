from django.contrib.auth import get_user_model
from django.conf import settings


def create_default_admin():

    User = get_user_model()

    username = "Admin"
    email = "qjaymce7@gmail.com"
    password = "Adomako123."

    if not User.objects.filter(username=username).exists():

        User.objects.create_superuser(
            username=username,
            email=email,
            password=password
        )

        print("Default admin created")

    else:
        print("Admin already exists")