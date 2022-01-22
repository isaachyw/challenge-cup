from django.urls import path
from shuyaplat.views.settings.getinfo import getinfo
from shuyaplat.views.settings.login import signin
from shuyaplat.views.settings.logout import signout
from shuyaplat.views.settings.register import register

urlpatterns = [
    path("getinfo/", getinfo, name="settings_getinfo"),
    path("login/", signin, name="settings_login"),
    path("logout/", signout, name="settings_logout"),
    path("register/", register, name="settings_register"),
]
