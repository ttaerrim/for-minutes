from django.db import models

# Create your models here.

class Hi(models.Model):
    full=models.TextField()
    summary = models.TextField()
    keyword = models.CharField(max_length=200)
