from django.shortcuts import render_to_response
from django.template import RequestContext, Context

def index(request):
    return render_to_response('index.html', RequestContext(request))