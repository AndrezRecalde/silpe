<?php

namespace App\Http\Controllers\Institucion;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Institucion;
use Illuminate\Http\Request;

class InstitucionController extends Controller
{
    public function getInstituciones()
    {
        $instituciones = Institucion::where('cli_tipo', 7)
                            ->where('activo', 1)
                            ->get(['cdgo_clnte', 'nmbre_clnte']);

        return response()->json(['status' => MsgStatusEnum::Success, 'instituciones' => $instituciones ], 200);
    }

    public function getComunidades()
    {
        $comunidades = Institucion::where('cli_tipo', 8)
                        ->where('activo', 1)
                        ->get(['cdgo_clnte', 'nmbre_clnte']);

        return response()->json(['status' => MsgStatusEnum::Success, 'comunidades' => $comunidades], 200);
    }
}
