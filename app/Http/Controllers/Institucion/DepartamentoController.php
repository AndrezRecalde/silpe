<?php

namespace App\Http\Controllers\Institucion;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Departamento;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DepartamentoController extends Controller
{
    public function getAgregadores(): JsonResponse
    {
        $agregadores = Departamento::where('interna', 1)
            ->where('es_direccion', 1)
            ->where('dep_activo', 1)
            ->where('agregador_valor', 1)
            ->get(['cdgo_dprtmnto', 'nmbre_dprtmnto']);

        return response()->json(['status' => MsgStatusEnum::Success, 'agregadores' => $agregadores], 200);
    }


    public function getDeptsInternos(): JsonResponse
    {
        $departamentos = Departamento::where('interna', 1)
            ->where('es_direccion', 1)
            ->where('dep_activo', 1)
            ->get(['cdgo_dprtmnto', 'nmbre_dprtmnto']);

        return response()->json(['status' => MsgStatusEnum::Success, 'departamentos' => $departamentos], 200);
    }
}
