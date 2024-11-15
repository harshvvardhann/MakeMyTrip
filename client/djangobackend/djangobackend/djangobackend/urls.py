"""
URL configuration for djangobackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', include('account.urls')),
    path('login/', include('account.urls')),
    path('flights/',include('flights.urls')),
    path('hotels/',include('hotels.urls')),
    path('homestays/',include('homestaysandvillas.urls')),
    path('trains/',include('trains.urls')),
    path('buses/',include('buses.urls')),
    path('cabs/', include('cabs.urls')),
    path('holidays/', include('holidays.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
