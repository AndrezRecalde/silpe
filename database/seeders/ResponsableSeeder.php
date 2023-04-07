<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResponsableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Creación de semillero para gestiones
        DB::table('sil_responsables')->delete();
        $responsables = [
            ['correo_director' => 'llopez@gadpe.gob.ec',     'correo_asistente' => 'gsosa@gadpe.gob.ec',        'departamento_id' => 17],
            ['correo_director' => 'hrosero@gadpe.gob.ec',    'correo_asistente' => 'vquintana@gadpe.gob.ec',    'departamento_id' => 21],
            ['correo_director' => 'fdelgado@gadpe.gob.ec',   'correo_asistente' => 'fajila@gadpe.gob.ec',       'departamento_id' => 39],
            ['correo_director' => 'lacedeno@gadpe.gob.ec',   'correo_asistente' => 'dareyes@gadpe.gob.ec',      'departamento_id' => 40],
            ['correo_director' => 'jreyes@gadpe.gob.ec',     'correo_asistente' => 'vestupinan@gadpe.gob.ec',   'departamento_id' => 22],

        ];
        DB::table('sil_responsables')->insert($responsables);
    }
}
