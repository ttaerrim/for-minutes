import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from .stt import *
from .serializer import *
from rest_framework import viewsets
# Create your views here.

class MeetingViewSet(viewsets.ModelViewSet):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer

    



class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

    def create(self, request):
        print("들어가나?")
        meeting = Meeting(request.POST, instance=request.meeting)
        # meeting = get_object_or_404(Meeting, pk=request.POST.get('pk', 1))
        print(request.POST.get('pk', 1))
        result = Result()
        audio = "media/"+str(meeting.file)
    
        res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
        data = json.loads(res.text)
        result.script = data['text']
        result.meeting = meeting
        result.save()

        return redirect('/result/' + str(meeting.id))


# def create(request):
#     meeting = get_object_or_404(Meeting, pk=request.POST.get('pk'))
#     result = Result()
#     audio = "media/audio/"+str(meeting.file)
    
#     res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
#     data = json.loads(res.text)
#     result.script = data['text']
#     result.meeting = meeting
#     result.save()

#     return redirect('/result/' + str(meeting.id))