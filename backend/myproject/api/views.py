from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import jwt


@csrf_exempt
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Check if the username and password are correct
        print('Received data: ', username, ' ', password)
        if username == 'admin' and password == 'admin':
            # Create a JWT token with the user's information
            token = jwt.encode({'username': username}, 'secret_key', algorithm='HS256')

            # Return the JWT token as a JSON response
            return JsonResponse({'token': token})
        else:
            # Return an error message if the username or password are incorrect
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
