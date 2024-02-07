from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Sponsor
from .serializers import SponsorSerializer


class SponsorView(APIView):

    def post(self, request):
        data = request.data
        serializer = SponsorSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Sponsor Added Successfully", safe=False)
        return JsonResponse("Oops, Failed to add record.", safe=False)
    
    def get_sponsor(self, pk):
        try:
            sponsor = Sponsor.objects.get(id=pk)
            return sponsor
        except Sponsor.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_sponsor(pk)
            serializer = SponsorSerializer(data)
        else:
            data = Sponsor.objects.all()
            serializer = SponsorSerializer(data, many=True)
        return Response(serializer.data)
    
    def put(self, request, pk=None):
        sponsor_to_update = Sponsor.objects.get(id=pk)
        serializer = SponsorSerializer(instance=sponsor_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Sponsor updated Successfully", safe=False)
        return JsonResponse("Failed To Update Sponsor")

    def delete(self, request, pk):
        sponsor_to_delete = Sponsor.objects.get(id=pk)
        sponsor_to_delete.delete()
        return JsonResponse("Sponsor Deleted Successfully", safe=False)