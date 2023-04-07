<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Documento extends Model
{
    use HasFactory;

    protected $table = 'sil_documentos';


    protected $fillable = [
        'archivo_doc',
        'documentoable_id',
        'documentoable_type'
    ];

    public function documentoable(): MorphTo
    {
        return $this->morphTo();
    }
}
