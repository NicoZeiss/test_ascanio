from django.conf.urls import url
from rest_framework import routers
from .views import CategoryViewSet, CardViewSet


router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet)
router.register(r'cards', CardViewSet)