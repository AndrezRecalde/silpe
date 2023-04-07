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
        Schema::create('sil_firmas', function (Blueprint $table) {
            $table->id();
            $table->string('archivo_firmas');
            $table->unsignedInteger('firmaable_id');
            $table->string('firmaable_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sil_firmas');
    }
};
