from django.urls import path

from geoportal import views

urlpatterns = [
    path('', views.index, name='geoportal_index'),
]
