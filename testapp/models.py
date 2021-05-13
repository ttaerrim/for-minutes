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
<<<<<<< HEAD
    photo = models.ImageField('photo/', null=True, blank=True)

    # result = models.OneToOneField(
    #     Result,
    #     on_delete=models.CASCADE,
    #     primary_key=True,
    #     blank=True
    # )

    def __str__(self):
        return self.title #자기 자신을 title로 표현



class Result(models.Model):
    meeting = models.OneToOneField(
        Meeting,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    script = models.TextField()
    keyword = models.TextField()
    summary = models.TextField()
    # def __str__(self):
    #     return self.title #자기 자신을 title로 표현
=======
    
    def __str__(self):
        return self.title

>>>>>>> 7c459b18d0a8d68ee5c8df38e635dca1c3b2b86c
