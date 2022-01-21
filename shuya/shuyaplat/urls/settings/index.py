from django.urls import path, include
from shuyaplat.views.settings.getinfo import getinfo

urlpatterns = [
    path("getinfo/", getinfo, name="settings.getinfo")
]
