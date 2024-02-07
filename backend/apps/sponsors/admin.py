from django.contrib import admin
from .models import Sponsor

models_list = [Sponsor]
admin.site.register(models_list)