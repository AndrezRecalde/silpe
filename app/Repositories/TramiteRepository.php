<?php

namespace App\Repositories;

use PDF;
use Carbon\Carbon;
use App\Models\Ingreso;
use App\Models\Responsable;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Interfaces\TramiteInterface;
use App\Models\Despacho;
use App\Models\Pasantia;
use App\Models\Solicitud;

class TramiteRepository implements TramiteInterface
{
    public function getResponsables($departamento_id): JsonResponse
    {
        $responsables = Responsable::where('departamento_id', $departamento_id)
                    ->first(['correo_director', 'correo_asistente']);


        return $responsables;
    }

    public function getCnsctvo_rta(): object
    {
        $cnsctvo_rta = DB::table('ingreso')
                        ->selectRaw('MAX(cnsctvo_rta) + 1 as cnsctvo_rta')
                        ->whereYear('fcha_rcpcion', DB::raw('year(CURDATE())'))
                        ->first();

        return $cnsctvo_rta;
    }

    public function storeIngreso($tramite): void
    {
        Ingreso::create([
            'cnsctvo_rta'   =>    $tramite->cnsctvo_rta,
            'nmro_ofcio'    =>    'S/N',
            'fcha_elbrcion' =>    Carbon::now(),
            'fcha_rcpcion'  =>    Carbon::now(),
            'rmtnte'        =>    $tramite->institucion_id,
            'dstntrio'      =>    29,
            'asnto'         =>    $tramite->asunto,
            'indctvo_estdo' =>    'GEN',
            'fcha_estdo'    =>    Carbon::now(),
            'cdgo_usrio'    =>    2,
            'tipo_doc_id'   =>    1,
            'subtipo_doc_id' =>   2,
            'ingreso_documental' => 0
        ]);
    }

    public function getCnsctvo_dspcho(): object
    {
        $cnsctvo_dspcho = DB::table('despacho')
                            ->selectRaw('MAX(cnsctvo_dspcho) + 1 as cnsctvo_dspcho')
                            ->first();

        return $cnsctvo_dspcho;
    }

    public function storeDespacho($pasantia): void
    {
        Despacho::create([
            'cnsctvo_dspcho' => $this->getCnsctvo_dspcho()->cnsctvo_dspcho,
            'cnsctvo_rta'   =>  $pasantia->cnsctvo_rta,
            'nmro_item'     =>  1,
            'fcha_dspcho'   =>  Carbon::now()->addHour(),
            'envdo_a'       =>  7350, /* ID de la tabla clntes para saber la Gestión de Talento Humano */
            'cdgo_accion'   =>  8,
            'dscrpcion_accion' => '8.- Coordine '. $pasantia->asunto,
            'cdgo_usrio'    =>  29,
            'rspnddo'       =>  0
        ]);
    }

    public function downloadSolicitud($id)
    {
        $solicitud = Solicitud::from('sil_solicitudes as ss')
                    ->selectRaw('ss.cnsctvo_rta, ss.asunto, year(ss.created_at) as fecha, c.nmbre_clnte')
                    ->join('clntes as c', 'c.cdgo_clnte', 'ss.comunidad_id')
                    ->where('ss.id', $id)
                    ->first();

        $pdf = PDF::loadview('pdf.solicitudes.solicitud', ['solicitud' => $solicitud]);
        return $pdf->download('reporte_ruta.pdf');
    }

    public function downloadRuta($id)
    {
        $pasante = Pasantia::from('sil_pasantias as sp')
                    ->selectRaw('sp.cnsctvo_rta, sp.asunto, year(sp.created_at) as fecha, c.nmbre_clnte')
                    ->join('clntes as c', 'c.cdgo_clnte', 'sp.institucion_id')
                    ->where('sp.id', $id)
                    ->first();

        $pdf = PDF::loadView('pdf.pasantias.pasantia', ['pasante' => $pasante]);
        return $pdf->download('reporte_ruta.pdf');
    }

}
