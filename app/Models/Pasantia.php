<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Pasantia extends Model
{
    use HasFactory;

    protected $table = 'sil_pasantias';


    protected $fillable = [
        'cnsctvo_rta',
        'institucion_id',
        'departamento_id',
        'asunto'
    ];

    public function documento(): MorphOne
    {
        return $this->morphOne(Documento::class, 'documentoable');
    }

    public function institucion(): BelongsTo
    {
        return $this->belongsTo(Institucion::class, 'institucion_id', 'cdgo_clnte');
    }
}
