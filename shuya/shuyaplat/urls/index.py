from django.urls import path, include
from shuyaplat.views.index import index, login_page, register_page, main_page, edit_information
from shuyaplat.views.logout import signout

urlpatterns = [
    path("", index, name="index"),
    # page结尾的是html页面 同时可以有GET和POST两种方法
    path("login_page/", login_page, name="login_page"),
    path("register_page/", register_page, name="register_page"),
    path("edit_information/", edit_information, name="edit_information"),
    path("main_page/", main_page, name="main_page"),
    path("logout/", signout, name="settings_logout"),


    path("menu/", include("shuyaplat.urls.menu.index")),
    path("mainpage", include("shuyaplat.urls.mainpage.index")),
    path("settings/", include("shuyaplat.urls.settings.index")),
]
