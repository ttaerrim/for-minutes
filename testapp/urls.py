from django.urls import path
from .api import *

urlpatterns = [
    path('', MeetingApi.as_view()),
    path('create', MeetingCreateApi.as_view()),
    path('<int:pk>', MeetingUpdateApi.as_view()),
    path('<int:pk>/result', ResultUpdateApi.as_view()),
    path('<int:pk>/delete', MeetingDeleteApi.as_view()),
]