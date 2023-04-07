<x-mail::message>
## Nueva Solicitud Pasantía
### Sistema de Información Local (SIL)

Buen día.

De parte de la institución educativa {{ $pasantia->institucion->nmbre_clnte }},
deseamos {{ $pasantia->asunto }}



### Por favor no responder a este mensaje

Gracias,<br>
{{ config('app.name') }}
</x-mail::message>
