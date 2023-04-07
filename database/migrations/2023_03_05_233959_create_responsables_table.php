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
        Schema::create('sil_responsables', function (Blueprint $table) {
            $table->id();
            $table->string('correo_director');
            $table->string('correo_asistente');
            $table->unsignedInteger('departamento_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sil_responsables');
    }
};
