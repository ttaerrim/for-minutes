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
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# 첫 번째 인자는 url의 prefix
# 두 번째 인자는 ViewSet
router.register(r'meeting', MeetingViewSet)
router.register(r'result', ResultViewSet)
urlpatterns =[
    path(r'', include(router.urls))
]