<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Despacho extends Model
{
    use HasFactory;

    protected $table = 'despacho';

    protected $primaryKey = 'cnsctvo_rta';


    public function ingreso()
    {
        return $this->belongsTo(Ingreso::class, 'cnsctvo_rta');
    }

}
