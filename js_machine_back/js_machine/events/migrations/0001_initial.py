# Generated by Django 2.2.2 on 2019-07-10 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='title')),
                ('description', models.TextField(verbose_name='description')),
                ('date', models.DateField()),
            ],
        ),
    ]
