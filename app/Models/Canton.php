<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Canton extends Model
{
    use HasFactory;

    protected $table = 'sil_cantones';

    public function solicitudes()
    {
        return $this->hasMany(Solicitud::class);
    }
}
