from django.urls import path
from .views import SponsorView

urlpatterns = [
    path("sponsors/", SponsorView.as_view()),
    path('sponsors/<int:pk>/', SponsorView.as_view())
]