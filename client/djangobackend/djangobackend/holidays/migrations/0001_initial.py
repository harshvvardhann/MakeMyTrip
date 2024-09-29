# Generated by Django 5.1 on 2024-09-13 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HolidayPackage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.URLField(max_length=2000)),
                ('description', models.TextField()),
                ('price', models.CharField(max_length=100)),
                ('highlights', models.JSONField()),
            ],
        ),
    ]