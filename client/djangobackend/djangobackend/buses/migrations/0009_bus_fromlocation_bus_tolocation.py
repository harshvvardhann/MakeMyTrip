# Generated by Django 5.1 on 2024-09-20 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buses', '0008_alter_bus_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='bus',
            name='fromLocation',
            field=models.CharField(default='Delhi', max_length=122),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bus',
            name='toLocation',
            field=models.CharField(default='Bangalore', max_length=122),
            preserve_default=False,
        ),
    ]
