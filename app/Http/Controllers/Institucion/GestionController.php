<?php

namespace App\Http\Controllers\Institucion;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Gestion;
use Illuminate\Http\Request;

/* Retirado: Fue reemplazado por la tabla de Departamentos */
class GestionController extends Controller
{
    public function getGestiones()
    {
        $gestiones = Gestion::get(['id', 'nombre_gestion']);

        return response()->json(['status' => MsgStatusEnum::Success, 'gestiones' => $gestiones], 200);
    }
}
