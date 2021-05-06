from django.urls import path
from .api import MeetingApi, MeetingCreateApi, MeetingUpdateApi, MeetingDeleteApi

urlpatterns = [
    path('api/', MeetingApi.as_view()),
    path('api/create/', MeetingCreateApi.as_view()),
    path('api/<int:pk>/', MeetingUpdateApi.as_view()),
    path('api/<int:pk>/delete/', MeetingDeleteApi.as_view()),
]