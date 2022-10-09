<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingreso extends Model
{
    use HasFactory;

    protected $table = 'ingreso';

    protected $primaryKey = 'cnsctvo_rta';



    public function despachos()
    {
        return $this->hasMany(Despacho::class, 'cnsctvo_rta');
    }
}
