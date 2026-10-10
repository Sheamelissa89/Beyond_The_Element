from django.shortcuts import render


def home(request):
    return render(request, "chemistry/home.html")

def notes(request):
    return render(request, "chemistry/notes.html")

def elements(request):
    return render(request, "chemistry/elements.html")