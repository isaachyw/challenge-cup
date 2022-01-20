from django.urls import path, include
from shuyaplat.views.index import index


urlpatterns = [
    path("", index, name="index"),
    path("menu/", include("shuyaplat.urls.menu.index")),
    path("mainpage", include("shuyaplat.urls.mainpage.index")),
    path("settings/", include("shuyaplat.urls.settings.index")),
]