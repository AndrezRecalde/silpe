<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Departamento extends Model
{
    use HasFactory;

    protected $table = 'dprtmntos';

    public function solicitudes(): HasMany
    {
        return $this->hasMany(Solicitud::class, 'departamento_id', 'cdgo_dprtmnto');
    }
}
