from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Task(models.Model):
    name=models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=250)
    priority= models.CharField(max_length=100)
    created = models.DateTimeField(auto_now=True)


def __str__(self):
    return self.title