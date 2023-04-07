<?php

namespace App\Http\Controllers\Tramite;

use App\Enums\MsgStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\SolicitudRequest;
use App\Interfaces\TramiteInterface;
use App\Mail\SolicitudMail;
use App\Models\Solicitud;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;


class SolicitudController extends Controller
{

    private TramiteInterface $tramiteRepository;

    public function __construct(TramiteInterface $tramiteRepository) {
        $this->tramiteRepository = $tramiteRepository;
    }

    public function store(SolicitudRequest $request): JsonResponse
    {
        $solicitud = Solicitud::create($request->validated());

        $archivo = $request->file('archivo_doc');
        $firmas = $request->file('archivo_firmas');

        $filename_doc = 'solicitud_'. time() . '.' . $archivo->getClientOriginalExtension();
        $filename_firmas = 'firma_'. time() . '.' . $firmas->getClientOriginalExtension();


        $save_path = '/solicitud/cedulas/'. $solicitud->cedula . '/';

        $public_path_doc = $save_path . $filename_doc;
        $public_path_firmas = $save_path . $filename_firmas;

        $path_doc = Storage::putFileAs(
            'public' . $save_path,
            $archivo,
            $filename_doc
        );

        $path_firmas = Storage::putFileAs(
            'public' . $save_path,
            $firmas,
            $filename_firmas
        );

        $solicitud->documento()->create([
            'archivo_doc'   =>  $public_path_doc
        ]);

        $solicitud->firma()->create([
            'archivo_firmas' => $public_path_firmas
        ]);

        if(!$path_doc || !$path_firmas){
            DB::rollback();
            return response()->json(['status' => MsgStatusEnum::Error, 'msg' => 'Error al cargar los archivos'], 500);
        }

        /* Obtengo el nuevo número de ruta */
        $cnsctvo_rta = $this->tramiteRepository->getCnsctvo_rta();
        $solicitud->cnsctvo_rta = $cnsctvo_rta->cnsctvo_rta;

        $solicitud->save();

        /* Realizo el Ingreso de Ruta automatico */
        $this->tramiteRepository->storeIngreso($solicitud);

        //Aquí saco la lista de los responsables de cada Gestión
        /* $responsables = $this->responsableRepository->getResponsables($solicitud->departamento_id); */

        Mail::to('crecalde@gadpe.gob.ec')
            ->send(new SolicitudMail($solicitud));

        //Aquí envío el email a los responsables
        /* Mail::to($responsables->correo_director)
            ->cc($responsables->correo_asistente)
            ->later(now()->addMinutes(1), new SolicitudMail($solicitud)); */

        return response()->json(['status' => MsgStatusEnum::Success, 'solicitud' => $solicitud], 201);

    }

    public function downloadServicio(Request $request)
    {
        return $this->tramiteRepository->downloadSolicitud($request->id);
    }
}
