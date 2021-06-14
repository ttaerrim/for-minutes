import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from testapp.stt import *
# Create your views here.

def resultCreate(request):
    meeting = get_object_or_404(Meeting, pk=request.POST['pk'])
    result = Result()
    audio = "../media/"+str(meeting.file)
    print(audio)
    if __name__ == '__main__':
        print('main??')
        res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
        print("res:", res)
        data = res.text
        print("data: ", data)
        result.script = data["text"]
        print("result.script: ", result.script)
        result.save()
        print("result: ", result)
    
    return redirect('/result/' + str(meeting.id))