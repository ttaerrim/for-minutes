from django.urls import path
from .api import *
import testapp.views

urlpatterns = [
    path('api/', MeetingApi.as_view()),
    path('api/create/', MeetingCreateApi.as_view()),
    path('api/<int:pk>/',MeetingUpdateApi.as_view()),
    path('api/<int:pk>/delete/', MeetingDeleteApi.as_view()),

    path('api/result/', ResultApi.as_view()),
    path('api/result/create/', testapp.views.resultCreate, name="result_create"),
    path('api/result/<int:pk>/', ResultUpdateApi.as_view()),
