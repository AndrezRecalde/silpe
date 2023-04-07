<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Styles -->
    <link href="{{ public_path('/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
</head>

<body style="background-image: url(assets/images/logo/fondo_a4.jpg);background-size: cover;background-repeat: no-repeat;margin: 0;height: 20vh;">

    <div class="container">
        <center>
            <strong style="font-size:15px;">SE HA GENERADO SU NÚMERO DE RUTA CORRECTAMENTE</strong>
        </center>
        <br>

        <div>
            <center>
                <img src="{{ public_path('/assets/images/logo/LogoMediano.png') }}" alt="logo" width="200px"
                    height="60px">
                <h6 style="margin-top: 20px;">SOLICITUD DE SERVICIOS</h6>
            </center>

                <table style="width: 60%;border-collapse: collapse;margin-top: 25px; margin-bottom: 25px;margin-left: auto; margin-right: auto;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid black;padding-right:10px; padding-left:10px">Año Ruta</th>
                            <th style="border: 1px solid black;padding-right:10px; padding-left:10px">Número Ruta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid black;padding-right:10px; padding-left:10px">{{ $solicitud->fecha }}</td>
                            <td style="border: 1px solid black;padding-right:10px; padding-left:10px">{{ $solicitud->cnsctvo_rta }}</td>
                        </tr>
                    </tbody>
                </table>

            <center>
                <span style="margin-bottom: 25px;">{{ $solicitud->nmbre_clnte }}</span><br>
                <h6 style="margin-top: 25px;">ASUNTO</h6>
                <span style="margin-bottom: 25px;">{{ Str::upper($solicitud->asunto) }}</span>
            </center>

        </div>

    </div>


</body>

</html>
