from dataclasses import field
from statistics import mode
from rest_framework import serializers
from .models import Product,AppUser,UserCart

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCart
        fields = '__all__'

class DeepCart(serializers.ModelSerializer):
    class Meta:
        model = UserCart
        depth = 1
        fields = '__all__'

