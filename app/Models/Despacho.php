<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Despacho extends Model
{
    use HasFactory;

    protected $table = 'despacho';

    protected $fillable = [
        'cnsctvo_dspcho',
        'cnsctvo_rta',
        'nmro_item',
        'fcha_dspcho',
        'envdo_a',
        'cdgo_accion',
        'dscrpcion_accion',
        'cdgo_usrio',
        'rspnddo'
    ];

    public $timestamps = false;

}
