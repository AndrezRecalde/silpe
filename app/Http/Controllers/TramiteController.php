<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class TramiteController extends Controller
{
    public function getTramite(Request $request)
    {
        $ingreso = DB::table('ingreso as i')
                    ->select(DB::raw('i.cnsctvo_rta, i.nmro_ofcio, i.fcha_elbrcion, i.fcha_rcpcion, i.doc_de_externo,
                                        i.doc_de, i.doc_para_externo, i.doc_para, i.asnto, i.indctvo_estdo, u.nmbre_usrio'))
                     ->join('usrios_sstma as u', 'u.cdgo_usrio', 'i.cdgo_usrio')
                     ->where('i.cnsctvo_rta', $request->cnsctvo_rta)
                     ->first();


       $despacho = DB::table('despacho as d')
                    ->select(DB::raw('d.cnsctvo_dspcho, d.cnsctvo_rta, d.nmro_item, d.fcha_dspcho,
                                    c.nmbre_clnte as remitente, a.nmbre_accion, d.dscrpcion_accion,
                                    d.fcha_rspsta, d.ofcio_rspsta, d.dscrpcion_rspsta '))
                    ->join('clntes as c', 'c.cdgo_clnte', 'd.envdo_a')
                    ->join('acciones as a', 'a.cdgo_accion', 'd.cdgo_accion')
                    ->where('d.cnsctvo_rta', $request->cnsctvo_rta)
                    ->get();


        if ($ingreso) {
            return response()->json(['status' => 'success', 'ingreso' => $ingreso, 'despacho' => $despacho], 200);
        } else {
            return response()->json(['status' => 'error', 'msg' => 'No existe el número de ruta'], 404);
        }
    }
}
