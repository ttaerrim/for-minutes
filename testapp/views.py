import json
from django.shortcuts import render, get_object_or_404, redirect
from .stt import *

from .models import Meeting, Result
from .serializer import *
from rest_framework import viewsets

from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import renderers

# read- only
class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer


    # action decorator to crate custom action (post requests 요청 응답시)
    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

def resultCreate(request):

    meeting = get_object_or_404(Meeting, pk=request.POST.get('pk',1))
    result = Result()
    audio = "media/audio/"+str(meeting.file)
    
    res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
    data = json.loads(res.text)
    result.script = data['text']
    result.meeting = meeting
    result.save()

    return redirect('/result/' + str(meeting.id))

