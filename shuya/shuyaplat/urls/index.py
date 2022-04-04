from django.urls import path, include
from shuyaplat.views.index import index, login_page, register_page, main_page

urlpatterns = [
    path("", index, name="index"),
    # page结尾的是html页面
    path("login_page/", login_page, name="login_page"),
    path("register_page/", register_page, name="register_page"),
    path("main_page/", main_page, name="main_page"),
    path("menu/", include("shuyaplat.urls.menu.index")),
    path("mainpage", include("shuyaplat.urls.mainpage.index")),
    path("settings/", include("shuyaplat.urls.settings.index")),
]
