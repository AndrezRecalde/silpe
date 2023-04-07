<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Servicio extends Model
{
    use HasFactory;

    protected $table = 'sil_servicios';


    public function solicitudes(): HasMany
    {
        return $this->hasMany(Solicitud::class);
    }
}
