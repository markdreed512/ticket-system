from tickets.models import Ticket
from rest_framework import viewsets, permissions
from .serializers import TicketSerializer

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = TicketSerializer