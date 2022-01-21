from django.http import JsonResponse
from shuyaplat.models.student.student import Student


def getinfo_web(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({
            'result': '未登录'
        })
    else:
        student = Student.objects.all()[0]
        return JsonResponse(
            {
                'result': 'success',
                'username': student.name
            }
        )


def getinfo(request):
    platform = request.GET.get('platform')
    return getinfo_web(request)
