<?php

namespace App\Http\Controllers\Tramite;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Despacho;
use App\Models\Ingreso;
use Illuminate\Http\Request;

class TramiteController extends Controller
{
    public function getTramite(Request $request)
    {
        $ingreso = Ingreso::from('ingreso as i')
                ->selectRaw('cnsctvo_rta, nmro_ofcio, fcha_elbrcion, fcha_rcpcion,
                            doc_de_externo, doc_de, doc_para_externo, d.nmbre_dprtmnto as doc_para, asnto,
                            indctvo_estdo')
                ->join('dprtmntos as d', 'd.cdgo_dprtmnto', 'i.dstntrio')
                ->where('i.cnsctvo_rta', $request->cnsctvo_rta)
                ->first();


        $despachos = Despacho::from('despacho as d')
            ->selectRaw('d.cnsctvo_dspcho, d.cnsctvo_rta, d.nmro_item, d.fcha_dspcho,
                                        c.nmbre_clnte as remitente, a.nmbre_accion, d.dscrpcion_accion,
                                        d.fcha_rspsta, d.ofcio_rspsta, d.dscrpcion_rspsta')
            ->join('clntes as c', 'c.cdgo_clnte', 'd.envdo_a')
            ->join('acciones as a', 'a.cdgo_accion', 'd.cdgo_accion')
            ->where('d.cnsctvo_rta', $request->cnsctvo_rta)
            ->get();

        if ($ingreso) {
            return response()->json(['status' => MsgStatusEnum::Success, 'ingreso' => $ingreso, 'despachos' => $despachos], 200);
        } else {
            return response()->json(['status' => MsgStatusEnum::Error, 'msg' => MsgStatusEnum::NotFound], 404);
        }
    }
}
