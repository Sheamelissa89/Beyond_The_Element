from django.shortcuts import render


def home(request):
    return render(request, "chemistry/home.html")


def elements(request):
    return render(request, "chemistry/elements.html")


def interactive_learning(request):
    return render(request, "chemistry/interactive_learning.html")


def notes(request):
    return interactive_learning(request)

def atomic_architect(request):
    return render(request, "chemistry/atomic_architect.html")


def classical_elements(request):
    return render(request, "chemistry/classical_elements.html")


def states_matter(request):
    return render(request, "chemistry/states_matter.html")


def element_classes(request):
    return render(request, "chemistry/element_classes.html")


def history(request):
    return render(request, "chemistry/history.html")