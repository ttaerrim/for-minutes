from rest_framework import  serializers
from .models import Hi

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hi
        fields = ('full', 'summary', 'keyword')