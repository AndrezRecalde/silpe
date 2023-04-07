<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class SolicitudRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'cnsctvo_rta'       =>  '',
            'nombres'           =>  'required',
            'apellidos'         =>  'required',
            'cedula'            =>  'required',
            'canton_id'         =>  'required',
            'parroquia_id'      =>  'required',
            'comunidad_id'      =>  'required',
            'departamento_id'   =>  'required',
            'servicio_id'       =>  'required',
            'asunto'            =>  'required|min:10',
            'archivo_doc'       =>  'required|mimes:pdf',
            'archivo_firmas'    =>  'required|mimes:pdf'
        ];
    }

    public function messages(): array
    {
        return [
            'nombres.required'      =>  'Por favor ingrese sus nombres',
            'apellidos.required'    =>  'Por favor ingrese sus apellidos',
            'cedula.required'       =>  'Por favor ingrese su número de cedula',
            'canton_id.required'    =>  'Por favor ingrese su cantón',
            'parroquia_id.required' =>  'Por favor ingrese su parroquia',
            'comunidad_id.required' =>  'Por favor ingrese la comunidad a la que pertenece',
            'departamento_id.required'   =>  'Por favor ingrese una gestión productora',
            'servicio_id.required'  =>  'Por favor ingrese un servicio',
            'asunto.required'       =>  'Por favor ingrese el asunto',
            'asunto.min'            =>  'Por favor el asunto debe ser más especifico',
            'archivo_doc.required'  =>  'Por favor ingrese el documento PDF',
            'archivo_firmas.required'   =>  'Por favor ingrese el archivo de firmas'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        /* $errors = (new ValidationException($validator))->errors(); */
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }

}
