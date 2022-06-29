from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.models import User

from shuyaplat.models.student.student import Student

# 部署到远端前请修改此条目！
Base_Url = {"base_url": "http://127.0.0.1:8000"}


def index(request):
    user = request.user
    if not user.is_authenticated:
        return redirect("login_page/")
    return redirect("main_page/")


def login_page(request):
    if request.method == "GET":
        return render(request, "multiends/login.html", Base_Url)
    if request.method == "POST":
        data = request.POST
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if not user:
            return render(request, "multiends/login.html", {"error": "用户名或密码不正确"})
        login(request, user)
        return redirect("../main_page/")


def register_page(request):
    if request.method == "GET":
        return render(request, "multiends/register.html", Base_Url)
    if request.method == "POST":
        data = request.POST
        username = data.get("username", "").strip()
        password = data.get("password", "").strip()
        password_confirm = data.get("password_confirm", "").strip()
        if not username or not password:
            return render(request, "multiends/register.html", {"error": "用户名和密码不能为空"})
        if password != password_confirm:
            return render(request, "multiends/register.html", {"error": "两个密码不一致"})
        if User.objects.filter(username=username).exists():
            return render(request, "multiends/register.html", {"error": "用户名已存在"})
        user = User(username=username)
        user.set_password(password)
        user.save()
        Student.objects.create(user=user, name="", vx_number="", qq_number="", phone_number=0, area="", education="")
        login(request, user)
        return redirect("../main_page/")


def main_page(request):
    return render(request, "multiends/main_page.html", Base_Url)

def edit_information(request):
    return render(request, "multiends/edit_information.html", Base_Url)

