<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sil_solicitudes', function (Blueprint $table) {
            $table->id();
            $table->integer('cnsctvo_rta')->nullable();
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('cedula');
            $table->string('correo');

            $table->unsignedInteger('canton_id');
            $table->unsignedInteger('parroquia_id');
            $table->unsignedInteger('comunidad_id');

            $table->unsignedInteger('departamento_id');
            $table->unsignedInteger('servicio_id');

            $table->text('asunto');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sil_solicitudes');
    }
};
