<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institucion extends Model
{
    use HasFactory;

    protected $table = 'clntes';


    public function pasantias()
    {
        return $this->hasMany(Pasantia::class, 'institucion_id', 'cdgo_clnte');
    }

    public function solicitudes()
    {
        return $this->hasMany(Solicitud::class, 'comunidad_id', 'cdgo_clnte');
    }
}
