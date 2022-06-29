from django.contrib.auth import logout
from django.shortcuts import redirect


def signout(request):
    user = request.user
    if not user.is_authenticated:
        return redirect("../login_page/")
    logout(request)
    return redirect("../login_page/")
