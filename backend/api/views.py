from decimal import Clamped
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from api.models import Product,AppUser,UserCart
from django.http import JsonResponse,HttpResponse
from api.serializers import CartSerializer, DeepCart, ProductSerializer, UserSerializer
from django.views.decorators.csrf import csrf_exempt
import json


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class CartViewSet(ModelViewSet):
    serializer_class = CartSerializer
    queryset = UserCart.objects.all()

class DeepCartViewSet(ModelViewSet):
    serializer_class = DeepCart
    queryset = UserCart.objects.all() # future, filter user id

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = AppUser.objects.all()


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        AppUser.objects.create_user(username=body['email'],  email=body['email'], password=body['password'])
        print('it worked!')

    return JsonResponse({'success':True})
