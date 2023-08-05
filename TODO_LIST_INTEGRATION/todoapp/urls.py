from django.urls import path

from todoapp.views import Task_add, Task_get, Task_delete, Task_update

urlpatterns = [
    path('Task_add', Task_add.as_view()),
    path('Task_get',Task_get.as_view()),
    path('Task_update/<int:id>/',Task_update.as_view()),
    path('Task_delete/<int:id>/',Task_delete.as_view()),



]