from rest_framework import serializers

from todoapp.models import Task


class Taskserializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    class Meta:
        model=Task
        fields=['id','name','title','description','priority','created']
