from django.shortcuts import render

def index(request):
    return render(request,"extra_aseet/index.html")