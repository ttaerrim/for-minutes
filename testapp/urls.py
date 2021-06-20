# from django.urls import path
# from .api import *
# import testapp.views

# urlpatterns = [
#     path('api/', MeetingApi.as_view()),
#     path('api/create/', MeetingCreateApi.as_view()),
#     path('api/<int:pk>/', MeetingUpdateApi.as_view()),
#     path('api/<int:pk>/delete/', MeetingDeleteApi.as_view()),

#     path('api/result/', ResultApi.as_view()),
#     path('api/result/create/', testapp.views.resultCreate, name="result_create"),
#     path('api/result/<int:pk>/', ResultUpdateApi.as_view()),
# ]

from django.urls import path, include
# from django.conf.urls import url
from .views import *
# from rest_framework.routers import DefaultRouter
from rest_framework import renderers

meeting_list = MeetingViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
meeting_detail = MeetingViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

# router = DefaultRouter()

# router.register(r'meeting', MeetingViewSet)
# router.register(r'result', ResultViewSet)

# urlpatterns =[
#     path(r'', include(router.urls))
# ]