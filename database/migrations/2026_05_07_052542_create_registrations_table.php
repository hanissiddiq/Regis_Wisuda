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
        Schema::create('registrations', function (Blueprint $table) {

            $table->id();

            $table->string('registration_number')
                ->nullable()
                ->unique();

            $table->string('name');
            $table->string('nim')->unique();

            $table->foreignId('faculty_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('jurusan_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->text('address');

            $table->string('ijazah_sma');
            $table->string('recommendation_letter');

            $table->enum('status', [
                'pending',
                'waiting_payment',
                'paid',
                'verified',
                'rejected'
            ])->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
