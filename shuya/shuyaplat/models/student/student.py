from django.db import models
from django.contrib.auth.models import User


class Student(models.Model):
    KINDERGARTEN = 'KI'
    PRIMARY = 'PR'
    JUNIOR = 'JU'
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    SENIOR = 'SR'
    YEAR_IN_SCHOOL_CHOICES = [
        (KINDERGARTEN, '幼儿园'),
        (PRIMARY, '小学'),
        (JUNIOR, '初中'),
        (FRESHMAN, '高一'),
        (SOPHOMORE, '高二'),
        (SENIOR, '高三'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=10, verbose_name="姓名")
    vx_number = models.CharField(max_length=50, verbose_name="微信号", blank=True)
    qq_number = models.CharField(max_length=20, verbose_name="qq号", blank=True)
    phone_number = models.IntegerField(default=0, verbose_name="手机号")
    area = models.CharField(max_length=10, verbose_name='所在省份')
    education = models.CharField(max_length=5, choices=YEAR_IN_SCHOOL_CHOICES, default=KINDERGARTEN)

    def __str__(self):
        return str(self.user)
