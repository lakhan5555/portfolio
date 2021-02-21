from django.shortcuts import render, redirect

from django.core.mail import send_mail
from django.conf import settings

def index(request):

    if request.method == 'POST':
        name = request.POST['name']
        message = request.POST['message']
        subject = request.POST['subject']
        email = request.POST['email']

        # from_email = email
        # to_email = [from_email, settings.EMAIL_HOST_USER]

        contact_message = "Name: %s \nsubject: %s \nvia: %s" % (
        name , 
        message , 
        email)

        send_mail(subject,
        contact_message,
        email,
        ['lm10leomessii@gmail.com'],
        fail_silently=False

        )
        return redirect('index')
    context = {}
    return render(request,'index.html', context)
