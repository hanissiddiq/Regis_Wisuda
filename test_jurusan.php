<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';

$db = $app->make('db');

// Test if table exists
$tables = $db->select("SELECT name FROM sqlite_master WHERE type='table'");
echo "Tables: " . json_encode($tables) . "\n";

// Test Jurusan model
$jurusans = \App\Models\Jurusan::select('id', 'name', 'code', 'faculty_id')->with('faculty:id,name')->get();
echo "Jurusans: " . json_encode($jurusans) . "\n";
