<?php

use App\Http\Controllers\Institucion\DepartamentoController;
use App\Http\Controllers\Institucion\GestionController;
use App\Http\Controllers\Institucion\InstitucionController;
use App\Http\Controllers\Institucion\ServicioController;
use App\Http\Controllers\Pasantia\PasantiaController;
use App\Http\Controllers\State\StateController;
use App\Http\Controllers\Tramite\SolicitudController;
use App\Http\Controllers\Tramite\TramiteController;
use App\Models\Departamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/consulta/tramite', [TramiteController::class, 'getTramite']);

Route::get('cantones', [StateController::class, 'getCantones']);
Route::post('parroquias', [StateController::class, 'getParroquias']);
Route::post('recintos', [StateController::class, 'getRecintos']);

Route::get('agregadores', [DepartamentoController::class, 'getAgregadores']);

Route::get('departamentos', [DepartamentoController::class, 'getDeptsInternos']);

Route::get('gestiones', [GestionController::class, 'getGestiones']); /* Reemplazado por Departamentos */

Route::post('servicios', [ServicioController::class, 'getServicios']);

Route::get('instituciones', [InstitucionController::class, 'getInstituciones']);

Route::get('comunidades', [InstitucionController::class, 'getComunidades']);

Route::post('/create/solicitud', [SolicitudController::class, 'store']);

Route::post('/create/pasantia', [PasantiaController::class, 'store']);

Route::post('/download/pasantia', [PasantiaController::class, 'downloadRuta']);

Route::post('/download/solicitud', [SolicitudController::class, 'downloadServicio']);

Route::get('ruta', [PasantiaController::class, 'getRuta']);
