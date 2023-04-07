<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Creación de semillero para servicios
        DB::table('sil_servicios')->delete();
        $servicios = [

            //FOMENTO PRODUCTIVO
            ['nombre_servicio' => 'APOYO A EMPRENDEDORES A TRAVES DE FERIAS ',                                         'departamento_id' => 17],
            ['nombre_servicio' => 'APOYO EN PROMOCIÓN DE EMPRENDEDORES TURISTICOS A TRAVES DE FERIAS',                 'departamento_id' => 17],
            ['nombre_servicio' => 'APOYO PARA LA REGULAZACIÓN SANITARIA DE PEQUEÑOS EMPRENDEDORES ',                   'departamento_id' => 17],
            ['nombre_servicio' => 'CAMPAÑAS DE DESPARACITACIÓN Y VACUNACIÓN',                                          'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE INSUMOS PARA PLANTACIONES AGROFORESTALES DE RÁPIDO CRECIMIENTO',        'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE SEMILLAS PARA EL CULTIVO DE ALIMENTOS ',                                'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE PLANTAS DE COCO, FERTILIZANTES A PEQUEÑOS PRODUCTORES',                 'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE PLANTAS DE CACAO NACIONAL FINO DE AROMA',                               'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE MATERIALES E INSUMOS PARA EL MEJORAMIENTO DE LA PRODUCCIÓN, ACOPIO Y COMERCIALIZACIÓN DE CACAO',       'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE ALEVINES, BALANCEADO, VITAMINAS A PRODUCTORES DE TILAPIA EN GEOMEMBRANA ',       'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE ARTES DE PESCA',                                                        'departamento_id' => 17],
            ['nombre_servicio' => 'DOTACIÓN DE EQUIPOS, MATERIALES Y HERRAMIENTAS A PEQUEÑOS EMPRENDORES ',            'departamento_id' => 17],
            ['nombre_servicio' => 'FORTALECIMIENTO DE CAPACIDADES CON ESCUELAS DE CAMPO',                              'departamento_id' => 17],
            ['nombre_servicio' => 'FORTALECIMIENTO DE RUTAS AGROTURISTICAS CON LA IMPLEMENTACIÓN DE PARADAS ESTRATEGICAS',       'departamento_id' => 17],
            ['nombre_servicio' => 'IMPLEMENTACIÓN DE PROYECTOS DE GALLINAS PONEDORAS, PATOS DE ENGORDE, POLLOS',       'departamento_id' => 17],
            ['nombre_servicio' => 'IMPLEMENTACIÓN DE PARCELAS AGRICOLAS CON ESPECIES ALIMENTICIAS.',                   'departamento_id' => 17],
            ['nombre_servicio' => 'MANEJO INTEGRAL DEL CULTIVO DE CACAO A TRAVES DE TALLERES TEORICOS Y PRÁCTICOS',    'departamento_id' => 17],
            ['nombre_servicio' => 'MEJORAMIENTO GENÉTICO EN GANADO VACUNO Y PORCINO ',                                 'departamento_id' => 17],
            ['nombre_servicio' => 'MEJOREMIENTO DE PASTURAS CON DOTACIÓN DE SEMILLAS',                                 'departamento_id' => 17],



            //GESTIÓN DE INFRAESTRUCTURA VIAL
            ['nombre_servicio' => 'CONTRUCCIÓN DE VÍAS',               'departamento_id' => 21],
            ['nombre_servicio' => 'CONTRUCCIÓN DE PUENTES',            'departamento_id' => 21],
            ['nombre_servicio' => 'CONTRUCCIÓN DE ALCANTARILLAS',      'departamento_id' => 21],
            ['nombre_servicio' => 'CONTRUCCIÓN DE DUCTOS CAJÓN',       'departamento_id' => 21],
            ['nombre_servicio' => 'MANTENIMIENTO DE VÍAS',             'departamento_id' => 21],
            ['nombre_servicio' => 'MANTENIMIENTO DE PUENTES',          'departamento_id' => 21],
            ['nombre_servicio' => 'MANTENIMIENTO DE ALCANTARILLAS',    'departamento_id' => 21],
            ['nombre_servicio' => 'MANTENIMIENTO DE DUCTOS CAJÓN',     'departamento_id' => 21],

            //GESTIÓN DE CUENCA RIEGO Y DRENAJE
            ['nombre_servicio' => 'PROYECTOS DE RIEGO Y DRENAJE',                          'departamento_id' => 39],
            ['nombre_servicio' => 'CONSTRUCCIÓN DE ALBARRADAS',                            'departamento_id' => 39],
            ['nombre_servicio' => 'CONSTRUCCIÓN DE POZOS DE AGUA PROFUNDA PARA RIEGO',     'departamento_id' => 39],
            ['nombre_servicio' => 'ENTREGA DE PLANTAS PARA PROTECCIÓN DE LAS CUENCAS HIDROGRÁFICAS',    'departamento_id' => 39],
            ['nombre_servicio' => 'LIMPIEZA DE ESTEROS',                                   'departamento_id' => 39],
            ['nombre_servicio' => 'DESAZOLVE Y LIMPIEZA DE RIOS',                          'departamento_id' => 39],

            //GESTIÓN DE COOPERACIÓN INTERNACIONAL
            ['nombre_servicio' => 'APOYO EN EL DISEÑO, FORMULACIÓN Y ESTRUCTURA DE PERFILES DE PROYECTOS PARA COOPERANTES',    'departamento_id' => 40],
            ['nombre_servicio' => 'VINCULAR A LOS COOPERANTES LOCALES, NACIONALES O INTERNACIONALES CON LA COMUNIDAD',         'departamento_id' => 40],
            ['nombre_servicio' => 'FORMULAR APOYAR LA SUSCRIPCIÓN DE ACUERDOS, CONVENIOS O CARTAS DE INTENCIÓN DE COOPERACIÓN INTERNACIONAL NO REEMBOLSABLE',    'departamento_id' => 40],
            ['nombre_servicio' => 'EVALUAR LOS PROYECTOS DE COOPERACIÓN TÉCNICA O FINANCIERA BILATERAL O MULTILATERAL',        'departamento_id' => 40],
            ['nombre_servicio' => 'GESTIONAR LA CAPTACIÓN DE ASISTENCIA HUMANITARIA EN CASO DE SER REQUERIDA',                 'departamento_id' => 40],
            ['nombre_servicio' => 'PROMOVEER ESTRATEGIAS Y ACCIONES PARA EL RESCATE Y EMPODERAMIENTO DE SUS COSTUMBRES ANCESTRALES Y MANIFESTACIONES CULTURALES A TRÁVES DE LA INTERNACIONALIZACIÓN DEL TERRITORIO',    'departamento_id' => 40],

            //GESTIÓN DE TECNOLOGIAS DE LA INFORMACIÓN
            ['nombre_servicio' => 'INSTALACIÓN DE PUNTOS WIFI',                          'departamento_id' => 22],
            ['nombre_servicio' => 'MANTENIMIENTO DE PUNTOS WIFI',                        'departamento_id' => 22],


        ];
        DB::table('sil_servicios')->insert($servicios);
    }
}
