# Generated by Django 5.1 on 2024-09-12 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buses', '0006_alter_bus_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bus',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
