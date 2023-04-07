<?php

namespace App\Http\Controllers\State;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Canton;
use App\Models\Parroquia;
use App\Models\Recinto;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function getCantones()
    {
        $cantones = Canton::where('activo', 1)->get(['id','nombre_canton']);

        return response()->json(['status' => MsgStatusEnum::Success, 'cantones' => $cantones], 200);
    }

    public function getParroquias(Request $request)
    {
        $parroquias = Parroquia::where('canton_id', $request->canton_id)->get(['id','nombre_parroquia']);

        return response()->json(['status' => MsgStatusEnum::Success, 'parroquias' => $parroquias], 200);
    }

    public function getRecintos(Request $request)
    {
        $recintos = Recinto::where('parroquia_id', $request->parroquia_id)->get(['id','nombre_recinto']);

        return response()->json(['status' => MsgStatusEnum::Success, 'recintos' => $recintos], 200);
    }
}
