from rest_framework import  serializers
from .models import Meeting, Result, Summary_Result

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = '__all__'

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'

class Summary_ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary_Result
        fields = '__all__'
    
    