from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = DefaultRouter()
router.register(r'products',views.ProductViewSet)
router.register(r'users',views.UserViewSet)
router.register(r'cart',views.CartViewSet)
router.register(r'deep-cart',views.DeepCartViewSet)


urlpatterns = [
    path('',include(router.urls)),
    path('create-user',views.signup),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),    
]


