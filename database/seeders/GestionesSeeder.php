<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GestionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Creación de semillero para gestiones
        DB::table('sil_gestiones')->delete();
        $gestiones = [
            ['nombre_gestion' => 'FOMENTO PRODUCTIVO',                         'activo' => 1],
            ['nombre_gestion' => 'GESTIÓN DE INFRAESTRUCTURA VÍAL',            'activo' => 1],
            ['nombre_gestion' => 'GESTIÓN DE CUENCA RIEGO Y DRENAJE',          'activo' => 1],
            ['nombre_gestion' => 'GESTIÓN DE COOPERACIÓN INTERNACIONAL',       'activo' => 1],
            ['nombre_gestion' => 'GESTIÓN DE TECNOLOGIAS DE LA INFORMACIÓN',   'activo' => 1],

        ];
        DB::table('sil_gestiones')->insert($gestiones);
    }
}
