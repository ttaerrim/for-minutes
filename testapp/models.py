from django.db import models

# Create your models here.
class Meeting(models.Model):
    title = models.CharField(max_length=50)
    topic = models.TextField()
    writer = models.CharField(max_length=30)
    parties = models.TextField()
    meeting_date = models.DateTimeField()
    date = models.DateTimeField(auto_now=True)
    file = models.FileField('media/')
    script = models.TextField(null=True)
    keyword = models.TextField(null=True)
    summary = models.TextField(null=True)
    def __str__(self):
        return self.title
