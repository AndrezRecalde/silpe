<?php

namespace App\Http\Controllers\Institucion;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Servicio;
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    public function getServicios(Request $request)
    {
        $servicios = Servicio::where('departamento_id', $request->departamento_id)
                            ->get(['id','nombre_servicio']);

        return response()->json(['status' => MsgStatusEnum::Success, 'servicios' => $servicios], 200);
    }
}
