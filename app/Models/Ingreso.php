<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingreso extends Model
{
    use HasFactory;

    protected $table = 'ingreso';

    protected $fillable = [
        'cnsctvo_rta',
        'nmro_ofcio',
        'fcha_elbrcion',
        'fcha_rcpcion',
        'doc_de_externo',
        'rmtnte',
        'doc_de',
        'doc_para_externo',
        'dstntrio',
        'doc_para',
        'asnto',
        'indctvo_estdo',
        'fcha_estdo',
        'cdgo_usrio',
        'id_envio',
        'tipo_doc_id',
        'subtipo_doc_id',
        'ingreso_documental',
        'iddoc'
    ];

    public $timestamps = false;
}
