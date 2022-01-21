from django.db import models
from django.contrib.auth.models import User


class Volunteer(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(max_length=256, blank=True,verbose_name="头像")

    def __str__(self):
        return str(self.user)
