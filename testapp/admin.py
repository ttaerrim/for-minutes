from django.contrib import admin

from .models import Meeting, Result, Summary_Result

# Register your models here.

admin.site.register(Meeting)
admin.site.register(Result)
admin.site.register(Summary_Result)
