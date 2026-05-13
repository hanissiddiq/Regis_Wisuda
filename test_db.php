<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require __DIR__ . '/vendor/autoload.php';

$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);

try {
    // Get database connection
    $db = app('db');
    
    // Check if tables exist
    echo "=== Checking tables ===\n";
    $tables = $db->select("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?", [env('DB_DATABASE')]);
    echo "Tables in database: " . json_encode(array_column($tables, 'TABLE_NAME')) . "\n\n";
    
    // Check faculties data
    echo "=== Checking Faculties ===\n";
    $faculties = $db->table('faculties')->get();
    echo "Faculties count: " . count($faculties) . "\n";
    if (count($faculties) > 0) {
        echo json_encode($faculties->toArray(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
    } else {
        echo "No faculties data found\n";
    }
    echo "\n";
    
    // Check jurusans data
    echo "=== Checking Jurusans ===\n";
    $jurusans = $db->table('jurusans')->get();
    echo "Jurusans count: " . count($jurusans) . "\n";
    if (count($jurusans) > 0) {
        echo json_encode($jurusans->toArray(), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
    } else {
        echo "No jurusans data found\n";
    }
    
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo $e->getTraceAsString();
}
