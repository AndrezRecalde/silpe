<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class PasantiaRequest extends FormRequest
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
            'institucion_id'    =>  'required',
            'departamento_id'   =>  'required',
            'asunto'            =>  'required|min:10',
            'archivo_doc'       =>  'required'
        ];
    }

    public function messages(): array
    {
        return [
            'institucion_id.required'   =>  'Por favor elija una institución',
            'departamento_id'           =>  'Por favor elija el departamento de pasantía',
            'asunto.required'           =>  'Por favor el asunto es obligatorio',
            'asunto.min'                =>  'Por favor el asunto debe ser más especifico',
            'archivo_doc.required'      =>  'Por favor cargue el documento de solicitud'
        ];
    }

    protected function failedValidation(Validator $validator): HttpResponseException
    {
        /* $errors = (new ValidationException($validator))->errors(); */
        throw new HttpResponseException(response()->json(['errores' => $validator->errors()], 422));
    }
}
