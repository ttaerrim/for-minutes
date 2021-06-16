from django.urls import path
from .views import MeetingViewSet

# Meeting 목록 보여주기
Meeting_list = MeetingViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

# Meeting detail 보여주기 + 수정 + 삭제
Meeting_detail = MeetingViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns =[
    path('/', Meeting_list),
    path('/<int:pk>/', Meeting_detail),
]