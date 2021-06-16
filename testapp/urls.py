from django.urls import path
from .api import *
import testapp.views

from testapp.views import MeetingViewSet

from django.conf.urls import url,include 
from django.contrib import admin 
from rest_framework import routers


router = routers.DefaultRouter() 
router.register('',MeetingViewSet)


urlpatterns = [
    # path('api', MeetingApi.as_view()),
    # path('api/create', MeetingCreateApi.as_view()),
    # path('api/<int:pk>', MeetingUpdateApi.as_view()),
    # path('api/<int:pk>/delete', MeetingDeleteApi.as_view()),
    
    url(r'^',include(router.urls)),


    path('result', ResultApi.as_view()),
    path('result/create', testapp.views.resultCreate, name="result_create"),
    path('result/<int:pk>/', ResultUpdateApi.as_view()),
]