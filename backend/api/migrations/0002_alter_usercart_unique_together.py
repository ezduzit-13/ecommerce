# Generated by Django 4.0.4 on 2022-06-08 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='usercart',
            unique_together=set(),
        ),
    ]
