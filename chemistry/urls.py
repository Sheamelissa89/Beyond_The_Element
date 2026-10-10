from django.urls import path

from . import views

app_name = "chemistry"

urlpatterns = [
    path("", views.home, name="home"),
    path("notes/", views.notes, name="notes"),
    path("elements/", views.elements, name="elements"),
]