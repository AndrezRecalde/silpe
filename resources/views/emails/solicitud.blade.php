<x-mail::message>
## Nueva Solicitud
### Sistema de Información Local (SIL)

Buen día.

Por la presente es grato dirigirme a usted, yo {{ $solicitud->nombres . " " . $solicitud->apellidos }}
con número de cédula {{ $solicitud->cedula }} y presente ciudadano de la provincia de Esmeraldas del cantón {{ $solicitud->canton->nombre_canton }}.

Conociendo su labor y las actividades que realiza(n) como departamento de {{ $solicitud->departamento->nmbre_dprtmnto }}
en el Gobierno Autónomo Descentralizado,
me gustaría coordinar de manera enfatica el servicio de: </br>
{{ $solicitud->servicio->nombre_servicio }}

para realizar de manera comedida en mi comunidad detallando:</br>
{{ $solicitud->asunto }}

Y de esta manera poder trabajar juntos.



### Por favor no responder a este mensaje

Gracias,<br>
{{ config('app.name') }}
</x-mail::message>
