import json
from django.shortcuts import render, get_object_or_404, redirect
from .models import Meeting, Result
from .stt import *
import os
from forminutesprj.settings import MEDIA_ROOT
from testapp.api import *
# Create your views here.

def resultCreate(request):
    meeting = get_object_or_404(Meeting, pk=request.POST.get('pk'))
    result = Result()
    audio = "media/"+str(meeting.file)
    
    res = ClovaSpeechClient().req_upload(file=audio, completion='sync')
    data = json.loads(res.text)
    result.script = data['text']
    result.meeting = meeting
    result.save()

    return redirect('/result/' + str(meeting.id))


# def meeting_edit_view(request, pk):
#     meeting = Meeting.objects.get(id=pk)
#     if request.method == "POST":
#         # if(meeting.writer == request.user or request.user.level == '0'):
#             file_change_check = request.POST.get('fileChange', False)
#             file_check = request.POST.get('photo-clear', False)

#             if file_check or file_change_check:
#                 os.remove(os.path.join(MEDIA_ROOT, meeting.photo.path))

#             form = MeetingCreateApi()
#             if form.is_valid():
#                 meeting = form.save(commit = False)
                
#                 meeting.save()
#                 # messages.success(request, "수정되었습니다.")
#                 return redirect('/api/'+str(pk))
#     else:
#         meeting = Meeting.objects.get(id=pk)
#         # if meeting.writer == request.user or request.user.level == '0':
#         form = MeetingCreateApi()
#         context = {
#             'form': form,
#             'edit': '수정하기',
#         }
#         if meeting.photo and meeting.photo:
#             context['file_url'] = meeting.photo.url
#             return render(request, "/api/", context)
#         # else:
#             # messages.error(request, "본인 게시글이 아닙니다.")
#             # return redirect('/api/'+str(pk))