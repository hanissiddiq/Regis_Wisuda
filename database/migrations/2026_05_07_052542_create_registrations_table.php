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
                // ->cascadeOnDelete();
                ->restrictOnDelete();

            $table->foreignId('jurusan_id')
                ->constrained()
                // ->cascadeOnDelete();
                ->restrictOnDelete();

            $table->text('address');

            $table->string('nik');
            $table->string('jenis_kelamin');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('agama');
            $table->string('telepon');
            
            $table->string('provinsi');
            $table->string('kabupaten');
            $table->string('kecamatan');
            $table->string('desa');

            $table->string('nama_ibu');
            $table->string('nama_ayah');
            
            $table->string('no_ijazah');
            $table->decimal('ipk', 4, 2);
            $table->string('keterangan_lulus');
            $table->string('no_sk_yudisium');
            $table->date('tanggal_sk_yudisium');
            $table->date('tanggal_lulus');
            $table->text('judul_ta');

            $table->string('pas_photo');
            $table->string('sk_yudisium');
            $table->string('ijazah_sma');
            // $table->string('recommendation_letter');

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
