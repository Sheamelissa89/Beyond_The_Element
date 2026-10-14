from django.urls import path

from . import views

app_name = "chemistry"

urlpatterns = [
    path("", views.home, name="home"),
    path("elements/", views.elements, name="elements"),
    path("notes/", views.notes, name="notes"),
    path("atomic-architect/", views.atomic_architect, name="atomic_architect"),
    path(
        "interactive-learning/",
        views.interactive_learning,
        name="interactive_learning",
    ),
    path(
        "classical-elements/",
        views.classical_elements,
        name="classical_elements",
    ),
    path("states-of-matter/", views.states_matter, name="states_matter"),
    path(
        "element-classifications/",
        views.element_classes,
        name="element_classes",
    ),
    path("history/", views.history, name="history"),
]