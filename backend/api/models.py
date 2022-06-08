from statistics import mode
from django.db import models
from django.contrib.auth.models import (AbstractUser)


    
class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']



class Product(models.Model):
    product_name=models.CharField(max_length=255)
    product_description = models.CharField(max_length=500)
    price= models.DecimalField(max_digits=10, decimal_places=2)

"""
This cart will be made up of a user and product id
on the front end we will grab all objects retaining to that 
"""
class UserCart(models.Model):
    user_id = models.ForeignKey(AppUser,on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product,on_delete=models.CASCADE)

    