from django.db import models



class Category(models.Model):
    name = models.CharField(max_length = 50, blank=False, default='')

    def __str__(self):
        return self.name


class Card(models.Model):
    name = models.CharField(max_length=250, blank=False, default='')
    content = models.TextField()
    priority = models.IntegerField()

    def __str__(self):
        return self.name