from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Hi

class PostViewset(viewsets.ModelViewSet):
    queryset = Hi.objects.all()
    serializer_class = PostSerializer