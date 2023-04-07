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
        Schema::create('sil_pasantias', function (Blueprint $table) {
            $table->id();
            $table->integer('cnsctvo_rta')->nullable();
            $table->unsignedInteger('institucion_id');
            $table->unsignedInteger('departamento_id');
            $table->text('asunto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sil_pasantias');
    }
};
