from django.urls import path,include
from .api import *
import testapp.views

from .views import MeetingViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'api', MeetingViewSet)

urlpatterns = [

    path('api', MeetingViewSet.as_view({
        'get': 'list'
    })),
    path('api/create', MeetingViewSet.as_view({
        'post': 'create'
    })),
    path('api/<int:pk>', MeetingViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'patch': 'partial_update'
    })),
    path('api/<int:pk>/delete', MeetingViewSet.as_view({
        'delete': 'destroy'
    })),
    # path('', include(router.urls)),

    path('api/result', ResultApi.as_view()),
    path('api/result/create', testapp.views.resultCreate, name="result_create"),
    path('api/result/<int:pk>', ResultUpdateApi.as_view()),
]

