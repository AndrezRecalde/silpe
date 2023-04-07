<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Solicitud extends Model
{
    use HasFactory;

    protected $table = 'sil_solicitudes';

    protected $fillable = [
        'nombres',
        'apellidos',
        'cedula',
        'correo',
        'canton_id',
        'parroquia_id',
        'comunidad_id',
        'departamento_id',
        'servicio_id',
        'asunto'
    ];

    public function documento(): MorphOne
    {
        return $this->morphOne(Documento::class, 'documentoable');
    }

    public function firma(): MorphOne
    {
        return $this->morphOne(Firma::class, 'firmaable');
    }

    public function canton(): BelongsTo
    {
        return $this->belongsTo(Canton::class);
    }

    public function gestion(): BelongsTo
    {
        return $this->belongsTo(Gestion::class);
    }

    public function servicio(): BelongsTo
    {
        return $this->belongsTo(Servicio::class);
    }

    public function institucion(): BelongsTo
    {
        return $this->belongsTo(Institucion::class, 'comunidad_id', 'cdgo_clnte');
    }

    public function departamento(): BelongsTo
    {
        return $this->belongsTo(Departamento::class, 'departamento_id', 'cdgo_dprtmnto');
    }
}
