
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