from django.shortcuts import render, redirect

# 部署到远端前请修改此条目！
Base_Url = {"base_url": "http://127.0.0.1:8000"}


def index(request):
    user = request.user
    if not user.is_authenticated:
        return redirect("login_page/")
    return redirect("main_page/")


def login_page(request):
    return render(request, "multiends/login.html", context=Base_Url)


def register_page(request):
    return render(request, "multiends/register.html", context=Base_Url)


def main_page(request):
    return render(request, "multiends/login.html", context=Base_Url)