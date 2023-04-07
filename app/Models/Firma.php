<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Firma extends Model
{
    use HasFactory;

    protected $table = 'sil_firmas';

    protected $fillable = [
        'archivo_firmas',
        'firmaable_id',
        'firmaable_type'
    ];

    public function firmaable(): MorphTo
    {
        return $this->morphTo();
    }
}
