from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('web.urls')),
    path('geoportal/', include('geoportal.urls')),
    path('admin/', admin.site.urls),
]
