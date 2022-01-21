from django.contrib import admin
from .models.volunteer.volunteer import Volunteer
from .models.student.student import Student


# Register your models here.

admin.site.register(Volunteer)
admin.site.register(Student)
