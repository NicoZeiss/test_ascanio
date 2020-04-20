# todos/models.py
from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    label = models.CharField(max_length=30)

    def __str__(self):
        """A string representation of the model."""
        return self.title