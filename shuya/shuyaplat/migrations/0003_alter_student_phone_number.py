# Generated by Django 3.2.5 on 2022-01-21 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shuyaplat', '0002_alter_student_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='phone_number',
            field=models.IntegerField(default=0, verbose_name='手机号'),
        ),
    ]
