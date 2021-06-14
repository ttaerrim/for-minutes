# Generated by Django 3.2 on 2021-06-12 04:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0002_auto_20210505_2332'),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('meeting', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='testapp.meeting')),
                ('script', models.TextField()),
                ('keyword', models.TextField()),
                ('summary', models.TextField()),
            ],
        ),
    ]
