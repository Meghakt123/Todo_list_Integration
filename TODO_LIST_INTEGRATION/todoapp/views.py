from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from todoapp.models import Task
from todoapp.serializers import Taskserializer


# Create your views here.
class Task_add(APIView):
    def post(self,request,format=None):
        serializer=Taskserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class Task_get(APIView):
    def get(self, request,format=None):
        Tasks = Task.objects.all()
        serializer = Taskserializer(Tasks, many=True)
        return Response(serializer.data)

class Task_update(APIView):
    def put(self, request, id, format=None):
        task = Task.objects.get(id=id)
        serializer = Taskserializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Task_delete(APIView):
    def delete(self, request,id,format=None):
        tasks =Task.objects.get(id=id)
        tasks.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




