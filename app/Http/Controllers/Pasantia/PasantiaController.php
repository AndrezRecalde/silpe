<?php

namespace App\Http\Controllers\Pasantia;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\PasantiaRequest;
use App\Interfaces\TramiteInterface;
use App\Mail\PasantiaMail;
use App\Models\Pasantia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;


class PasantiaController extends Controller
{

    private TramiteInterface $tramiteRepository;

    public function __construct(TramiteInterface $tramiteRepository)
    {
        $this->tramiteRepository = $tramiteRepository;
    }

    public function store(PasantiaRequest $request)
    {
        $pasantia = Pasantia::create($request->validated());
        $archivo = $request->file('archivo_doc');
        $file_doc = 'pasantia_' . time() . '.' . $archivo->getClientOriginalExtension();
        $save_path = '/pasantias/institucion/' . $pasantia->institucion_id . '/';
        $public_path = $save_path . $file_doc;
        $path_doc = Storage::putFileAs(
            'public' . $save_path,
            $archivo,
            $file_doc
        );

        $pasantia->documento()->create([
            'archivo_doc'   =>  $public_path
        ]);

        if (!$path_doc) {
            DB::rollback();
            return response()->json(['status' => MsgStatusEnum::Error, 'msg' => 'Error al cargar los archivos'], 500);
        }

        /* Obtengo el nuevo número de ruta */
        $cnsctvo_rta = $this->tramiteRepository->getCnsctvo_rta();
        $pasantia->cnsctvo_rta = $cnsctvo_rta->cnsctvo_rta;
        $pasantia->save();



        /* Realizo el Ingreso de Ruta automatico */
        $this->tramiteRepository->storeIngreso($pasantia);

        /* Realizo el Despacho automatico */
        $this->tramiteRepository->storeDespacho($pasantia);

        /* TODO: En el archivo useSolicitudStore crear el metodo para descargar*/

        /* Mail::to('crecalde@gadpe.gob.ec')
            ->send(new PasantiaMail($pasantia)); */

        //Aquí envío el email a los responsables
        /* Mail::to($responsables->correo_director)
            ->cc($responsables->correo_asistente)
            ->later(now()->addMinutes(1), new SolicitudMail($solicitud)); */

        return response()->json(['status' => MsgStatusEnum::Success, 'pasantes' => $pasantia], 201);
    }

    public function downloadRuta(Request $request)
    {
        return $this->tramiteRepository->downloadRuta($request->id);
    }

}
