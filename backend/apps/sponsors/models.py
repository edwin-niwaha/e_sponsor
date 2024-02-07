from django.db import models
# from uuid import uuid4

# Create your models here.
class Sponsor(models.Model):
    id = models.IntegerField(primary_key=True)
    # prefix = models.CharField(max_length=10)
    last_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    # GENDER_CHOICES = (("M", "Male"), ("F", "Female"))
    # gender = models.CharField(max_length=10, choices=GENDER_CHOICES, default="M")
    job_title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    # region = models.CharField(max_length=100)
    # country = models.CharField(max_length=100)
    # city = models.CharField(max_length=100)
    # state = models.CharField(max_length=100)
    # zip_code = models.CharField(max_length=100)
    # email = models.CharField(max_length=100)
    # telephone = models.CharField(max_length=10)
    # mobile = models.CharField(max_length=10)
    # address = models.CharField(max_length=100)
    # donation_type = models.CharField(max_length=100)
    is_departed = models.BooleanField(default=None)

