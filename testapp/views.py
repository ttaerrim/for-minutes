import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from .stt import *
import os
from forminutesprj.settings import MEDIA_ROOT
from testapp.api import *

from .serializer import MeetingSerializer,ResultSerializer
from rest_framework import viewsets

from .keyword import *

# list detail update delate
class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

    def create(self,request,pk):
        meeting = get_object_or_404(Meeting, pk=pk)
        result = Result()

        audio = "media/"+str(meeting.file)
        
        res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
        data = json.loads(res.text)
        texts = [data['text']]
        
        # word = Krwordrank.wordrank(texts)
        
        result.script = data['text']
        # result.keyword = word
        result.meeting = meeting
        result.save()
        return redirect('/testapp/result/' + str(meeting.id))

# script 수정 후 keyword / summary
    def partial_update(self,request,pk=None):
        
        serializer = ResultSerializer(script, data = request.data, partial=True)

        def create(self,request,pk):
            result = get_object_or_404(Result, pk=pk)
            
            texts = result.script
           
            word = Krwordrank.wordrank(texts)
            
            result.keyword = word
            result.meeting = meeting
            result.save()
            return redirect('/testapp/result/' + str(meeting.id))

