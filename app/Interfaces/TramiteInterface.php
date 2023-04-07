<?php

namespace App\Interfaces;

interface TramiteInterface {

    public function getResponsables($departamento_id);
    public function getCnsctvo_rta();
    public function storeIngreso($tramite);
    public function storeDespacho($pasantia);
    public function downloadSolicitud($id);
    public function downloadRuta($id);
}
