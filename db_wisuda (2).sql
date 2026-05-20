-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 20, 2026 at 12:47 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_wisuda`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-livewire-rate-limiter:16d36dff9abd246c67dfac3e63b993a169af77e6', 'i:1;', 1779277025),
('laravel-cache-livewire-rate-limiter:16d36dff9abd246c67dfac3e63b993a169af77e6:timer', 'i:1779277025;', 1779277025);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE `faculties` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`id`, `name`, `code`, `created_at`, `updated_at`) VALUES
(1, 'Ekonomi', '01', '2026-05-06 10:27:58', '2026-05-06 10:27:58'),
(2, 'Teknik', '02', '2026-05-06 10:28:30', '2026-05-06 10:28:30'),
(3, 'Kedokteran', '03', '2026-05-06 10:29:02', '2026-05-06 10:29:02'),
(4, 'Ilmu Sosial & Politik', '04', '2026-05-06 10:29:38', '2026-05-06 10:29:38'),
(5, ' Keguruan dan Ilmu Pendidikan', '05', '2026-05-06 10:30:15', '2026-05-06 10:30:15'),
(6, 'Pertanian', '06', '2026-05-06 10:41:31', '2026-05-06 10:41:31'),
(7, 'Hukum', '07', '2026-05-06 10:41:45', '2026-05-06 10:41:45'),
(8, 'Ilmu Komputer', '08', '2026-05-06 11:43:44', '2026-05-06 11:43:44');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `graduation_fees`
--

CREATE TABLE `graduation_fees` (
  `id` bigint UNSIGNED NOT NULL,
  `faculty_id` bigint UNSIGNED NOT NULL,
  `jurusan_id` bigint UNSIGNED NOT NULL,
  `amount` bigint NOT NULL,
  `year` year NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `graduation_fees`
--

INSERT INTO `graduation_fees` (`id`, `faculty_id`, `jurusan_id`, `amount`, `year`, `created_at`, `updated_at`) VALUES
(1, 8, 26, 2000000, 2026, '2026-05-20 00:16:41', '2026-05-20 00:16:41'),
(4, 2, 7, 3500000, 2026, '2026-05-20 00:29:47', '2026-05-20 00:29:47'),
(5, 3, 19, 12500000, 2026, '2026-05-20 05:12:40', '2026-05-20 05:12:40');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jurusans`
--

CREATE TABLE `jurusans` (
  `id` bigint UNSIGNED NOT NULL,
  `faculty_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jurusans`
--

INSERT INTO `jurusans` (`id`, `faculty_id`, `name`, `code`, `created_at`, `updated_at`) VALUES
(1, 1, 'Akuntansi', '01', '2026-05-06 11:22:33', '2026-05-06 11:22:33'),
(2, 1, 'Ekonomi Pembangunan', '02', '2026-05-06 11:22:59', '2026-05-06 11:22:59'),
(3, 1, 'Ekonomi Islam', '03', '2026-05-06 11:23:18', '2026-05-06 11:23:18'),
(4, 2, 'Teknik Sipil', '01', '2026-05-06 11:23:55', '2026-05-06 11:23:55'),
(5, 2, 'Teknik Kimia', '02', '2026-05-06 11:24:16', '2026-05-06 11:24:16'),
(6, 2, 'Teknik Industri', '03', '2026-05-06 11:24:46', '2026-05-06 11:25:50'),
(7, 2, 'Teknik Mesin', '04', '2026-05-06 11:25:33', '2026-05-06 11:25:33'),
(8, 4, 'Administrasi Publik', '01', '2026-05-06 11:26:30', '2026-05-06 11:26:30'),
(9, 4, 'Ilmu Politik', '02', '2026-05-06 11:27:00', '2026-05-06 11:27:00'),
(10, 4, 'Ilmu Komunikasi', '03', '2026-05-06 11:28:03', '2026-05-06 11:30:01'),
(11, 4, 'Hubungan Internasional', '04', '2026-05-06 11:28:30', '2026-05-06 11:30:13'),
(12, 4, 'Administrasi Bisnis', '05', '2026-05-06 11:29:04', '2026-05-06 11:29:42'),
(13, 5, 'Pendidikan Matematika', '01', '2026-05-06 11:31:30', '2026-05-06 11:31:30'),
(14, 5, 'Pendidikan Bahasa Indonesia', '02', '2026-05-06 11:32:36', '2026-05-06 11:32:36'),
(15, 5, 'Pendidikan Fisika', '03', '2026-05-06 11:33:10', '2026-05-06 11:33:10'),
(16, 5, 'Pendidikan Ekonomi', '04', '2026-05-06 11:34:00', '2026-05-06 11:34:00'),
(17, 7, 'Hukum Pidana', '01', '2026-05-06 11:36:24', '2026-05-06 11:36:24'),
(18, 7, 'Hukum Perdata', '02', '2026-05-06 11:36:45', '2026-05-06 11:36:45'),
(19, 3, 'Ilmu Kedokteran', '01', '2026-05-06 11:39:15', '2026-05-06 11:39:15'),
(20, 3, 'Ilmu Gizi', '02', '2026-05-06 11:39:49', '2026-05-06 11:39:49'),
(21, 3, 'Kebidanan', '03', '2026-05-06 11:40:31', '2026-05-06 11:40:31'),
(22, 6, 'Agroteknologi', '01', '2026-05-06 11:42:05', '2026-05-06 11:42:05'),
(23, 6, 'Agribisnis', '02', '2026-05-06 11:42:38', '2026-05-06 11:42:38'),
(24, 6, 'Budidaya Perairan', '03', '2026-05-06 11:43:08', '2026-05-06 11:43:08'),
(25, 8, 'Informatika', '01', '2026-05-06 11:44:19', '2026-05-06 11:44:19'),
(26, 8, 'Sistem Informasi', '02', '2026-05-06 11:45:02', '2026-05-06 11:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_05_07_051906_create_personal_access_tokens_table', 1),
(5, '2026_05_07_052106_create_faculties_table', 1),
(6, '2026_05_07_052344_create_jurusans_table', 1),
(7, '2026_05_07_052542_create_registrations_table', 1),
(8, '2026_05_07_052659_create_payments_table', 1),
(9, '2026_05_20_064918_create_graduation_fees_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint UNSIGNED NOT NULL,
  `registration_id` bigint UNSIGNED NOT NULL,
  `order_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gross_amount` decimal(12,2) NOT NULL,
  `transaction_time` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `registration_id`, `order_id`, `transaction_status`, `payment_type`, `gross_amount`, `transaction_time`, `created_at`, `updated_at`) VALUES
(1, 1, 'TRX-3E7488', 'settlement', 'bank_transfer', '3500000.00', '2026-05-20 00:41:10', '2026-05-20 00:40:23', '2026-05-20 00:41:10'),
(2, 2, 'TRX-4D2C7C', 'settlement', 'bank_transfer', '2000000.00', '2026-05-20 00:50:59', '2026-05-20 00:50:33', '2026-05-20 00:50:59'),
(4, 5, 'TRX-EA0A3E', 'settlement', 'bank_transfer', '12500000.00', '2026-05-20 05:27:11', '2026-05-20 05:21:06', '2026-05-20 05:27:11');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 3, 'auth_token', '0c4a69a06737a0026a021c38e8ffd83956522ce4dc50f8e0d7a66f5c47a36326', '[\"*\"]', NULL, NULL, '2026-05-20 00:38:05', '2026-05-20 00:38:05'),
(2, 'App\\Models\\User', 3, 'auth_token', '0cb8aa868e8ffeb17076d977e3c658f9c64d3b2389d544acef0cfabb7ed34517', '[\"*\"]', '2026-05-20 00:42:07', NULL, '2026-05-20 00:38:19', '2026-05-20 00:42:07'),
(3, 'App\\Models\\User', 4, 'auth_token', '84a35b2a54b3c7112d094ca3c29bd18a9f60841df0397cb833e615a32b996e05', '[\"*\"]', NULL, NULL, '2026-05-20 00:44:59', '2026-05-20 00:44:59'),
(4, 'App\\Models\\User', 4, 'auth_token', '5aa17d62c26f9dc168c20d88a97cd8afff79a74de4829e2c3cc62360df656c7f', '[\"*\"]', '2026-05-20 00:51:17', NULL, '2026-05-20 00:45:13', '2026-05-20 00:51:17'),
(5, 'App\\Models\\User', 5, 'auth_token', '2ba5e085085d0b7429b93fc7468d4511da046d2bb220d6c32869c364cafc42a2', '[\"*\"]', NULL, NULL, '2026-05-20 05:06:37', '2026-05-20 05:06:37'),
(6, 'App\\Models\\User', 5, 'auth_token', 'a98b7e118943f6ba060cf970ebe8f9f704968bb4430197df2f484186902caf46', '[\"*\"]', '2026-05-20 05:14:27', NULL, '2026-05-20 05:07:25', '2026-05-20 05:14:27'),
(7, 'App\\Models\\User', 6, 'auth_token', '7a99270a5826e69a9470d6818072348fc27fc839a0fa915deed9b88a2e1a1464', '[\"*\"]', NULL, NULL, '2026-05-20 05:16:53', '2026-05-20 05:16:53'),
(8, 'App\\Models\\User', 6, 'auth_token', '19a758be228d4ee5af45b5d6dbece2d2597e5dd21e29c1db07146318f4c39120', '[\"*\"]', '2026-05-20 05:21:05', NULL, '2026-05-20 05:17:19', '2026-05-20 05:21:05');

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

CREATE TABLE `registrations` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `registration_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nim` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `faculty_id` bigint UNSIGNED NOT NULL,
  `jurusan_id` bigint UNSIGNED NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nik` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis_kelamin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `agama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telepon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provinsi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kabupaten` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kecamatan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_ibu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama_ayah` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_ijazah` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ipk` decimal(4,2) NOT NULL,
  `keterangan_lulus` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_sk_yudisium` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggal_sk_yudisium` date NOT NULL,
  `tanggal_lulus` date NOT NULL,
  `judul_ta` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pas_photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sk_yudisium` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ijazah_sma` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('pending','waiting_payment','paid','verified','rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `registrations`
--

INSERT INTO `registrations` (`id`, `user_id`, `registration_number`, `name`, `nim`, `faculty_id`, `jurusan_id`, `address`, `nik`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `agama`, `telepon`, `provinsi`, `kabupaten`, `kecamatan`, `desa`, `nama_ibu`, `nama_ayah`, `no_ijazah`, `ipk`, `keterangan_lulus`, `no_sk_yudisium`, `tanggal_sk_yudisium`, `tanggal_lulus`, `judul_ta`, `pas_photo`, `sk_yudisium`, `ijazah_sma`, `status`, `created_at`, `updated_at`) VALUES
(1, 3, '02040001', 'Farhan', '1705063012', 2, 7, 'jaln pulo u', '11111454547898', 'L', 'bireuen', '1999-05-20', 'Islam', '085263634080', '11', '1111', '111110', '1111102028', 'Maryati', 'Sudirman', '789', '3.68', 'Cumlaude', '789', '2026-05-13', '2026-05-20', 'las smaw', 'pas_photos/uAdQgsHSfkHHrVlyfs8tvLwgcwk6Oyp1zYOU2I53.jpg', 'sk_yudisium/kS4p9zGtS2Xn7F1SRnNChA3UeNe7wsyyCatb3y06.jpg', 'ijazah/MznliYpUYdF0ofLX04WrIquKAjV9igevyyg4fDb3.jpg', 'paid', '2026-05-20 00:40:21', '2026-05-20 00:41:10'),
(2, 4, '08020001', 'rudiana', '120405', 8, 26, 'jaln Bener Meriah', '1454236597', 'L', 'lhokseumawe', '1998-05-10', 'Islam', '0878787878', '11', '1117', '111707', '1117072022', 'Maryam', 'Hasanuddin', '700', '3.56', 'Sangat Memuaskan', '700', '2026-05-10', '2026-05-20', 'TA akhiran', 'pas_photos/5ZSgUbMPpXyhtADpbB3EWuan7exdozsLpjy2urKL.jpg', 'sk_yudisium/IOCZoOMhfWPab19SkoRruzRojqzFjlUHMPR58qii.jpg', 'ijazah/h1WOhTuQGOhxrleSbaEm277Ryd6LrkPZEsLssOIH.jpg', 'paid', '2026-05-20 00:50:32', '2026-05-20 00:50:59'),
(3, 5, NULL, 'Nurhaliza', '21122001', 3, 19, 'Jl. Medan - Banda Aceh Depan Meunasah Mesjid Penteuet', '1111521120001', 'P', 'Blang Mee', '2001-12-21', 'Islam', '0812344321', '11', '1173', '117303', '1173032014', 'Nurlinda', 'M. Jafar', '123', '3.75', 'Cumlaude', '123', '2026-05-12', '2026-05-20', 'Contoh Skripsi Asal asalan', 'pas_photos/W6300f1wQCAHBbIumS4jNFIwWe1f52EvGldY9dDa.jpg', 'sk_yudisium/oWmvABfQ8HLVCRSWWFEVE6A5nc2IZwsPNFU02U1I.jpg', 'ijazah/I1YGQAT2Lv9gthgUaQcOOPaCZRmWvjLZfF013ciW.jpg', 'waiting_payment', '2026-05-20 05:11:31', '2026-05-20 05:11:31'),
(4, 5, '03010001', 'Nurhaliza', '21122002', 3, 19, 'Jl. Medan - Banda Aceh Depan Meunasah Mesjid Penteuet', '1111521120001', 'P', 'Blang Mee', '2001-12-21', 'Islam', '0812344321', '11', '1173', '117303', '1173032014', 'Nurlinda', 'M. Jafar', '123', '3.75', 'Cumlaude', '123', '2026-05-12', '2026-05-20', 'Contoh Skripsi Asal asalan', 'pas_photos/LoHaGfWMBxuTTCZ01rE5tbcwn54C2Ev6J6ino2xF.jpg', 'sk_yudisium/mAmtsilz8Fm4MIo2MLgI3pJgvZmJ2YSN8umzuzbg.jpg', 'ijazah/1t4GTtV2A6iEG1tNhOhnYKx6mbGVWXc9Pt7m4ZiU.jpg', 'paid', '2026-05-20 05:13:28', '2026-05-20 05:13:49'),
(5, 6, '03010002', 'kausar', '2400000', 3, 19, 'jln alternatif blang mee awegeutah', '121212121212', 'L', 'Blang Mee', '2004-02-20', 'Islam', '0808080808', '11', '1111', '111117', '1111172012', 'Nurlinda', 'M. Jafar', '1024', '3.90', 'Cumlaude', '1024', '2025-03-12', '2025-03-18', 'Praktikum Kelulusan', 'pas_photos/IQfeBFWuZ5xdhXiK630S1gcDXWnrlsU8t0yMDxqD.jpg', 'sk_yudisium/3m9CQmvbvwItN3IgHckFmJ0FAqGu6IDCu5VRPUhE.jpg', 'ijazah/7QeHNvdKZpuTq3N0WRb5ZJyqU4gmd8ynatQUjMkq.jpg', 'paid', '2026-05-20 05:21:04', '2026-05-20 05:27:11');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('jj7PHG2Husv7cFBfqMrKSLkXjjw6GmL9O1waQvYV', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36', 'YTo4OntzOjY6Il90b2tlbiI7czo0MDoiUDVsNEJ5clhxQk5MSEFCM0Rrd2sxdTRNbExTcmpac2JVc1paZXNHcyI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjI6e3M6MzoidXJsIjtzOjM2OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYWRtaW4vcGF5bWVudHMiO3M6NToicm91dGUiO3M6Mzk6ImZpbGFtZW50LmFkbWluLnJlc291cmNlcy5wYXltZW50cy5pbmRleCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjI7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjQ6IjNjYzkyZmFlZWI3N2Y2YTE2YWMxMzIwOTEwN2M0NzRmYzgwNWNhY2YwM2VhMWZiZTc4NDM2NjVmNzVmMzRkY2MiO3M6NjoidGFibGVzIjthOjM6e3M6NDA6Ijk5ODdkNTI0MGViMzA0ZDhjZjFkZTliODBmNGU5ZjQ3X2NvbHVtbnMiO2E6Njp7aTowO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjg6Im9yZGVyX2lkIjtzOjU6ImxhYmVsIjtzOjg6Ik9yZGVyIElEIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MTthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czozMjoicmVnaXN0cmF0aW9uLnJlZ2lzdHJhdGlvbl9udW1iZXIiO3M6NToibGFiZWwiO3M6MTk6IlJlZ2lzdHJhdGlvbiBOdW1iZXIiO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aToyO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjE3OiJyZWdpc3RyYXRpb24ubmFtZSI7czo1OiJsYWJlbCI7czo0OiJOYW1lIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MzthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMjoicGF5bWVudF90eXBlIjtzOjU6ImxhYmVsIjtzOjEyOiJQYXltZW50IFR5cGUiO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aTo0O2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjEyOiJncm9zc19hbW91bnQiO3M6NToibGFiZWwiO3M6MTI6Ikdyb3NzIEFtb3VudCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjU7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6MTg6InRyYW5zYWN0aW9uX3N0YXR1cyI7czo1OiJsYWJlbCI7czoxODoiVHJhbnNhY3Rpb24gU3RhdHVzIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fX1zOjQwOiI5ZTgxMDcyOTJkZTg4OWJlMDAyMGQ3YmNmNTVkZTY1M19jb2x1bW5zIjthOjQ6e2k6MDthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMjoiZmFjdWx0eS5uYW1lIjtzOjU6ImxhYmVsIjtzOjg6IkZha3VsdGFzIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MTthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo0OiJuYW1lIjtzOjU6ImxhYmVsIjtzOjc6Ikp1cnVzYW4iO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aToyO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjQ6ImNvZGUiO3M6NToibGFiZWwiO3M6NDoiS29kZSI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjM7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6MTA6ImNyZWF0ZWRfYXQiO3M6NToibGFiZWwiO3M6MTA6IkNyZWF0ZWQgYXQiO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9fXM6NDA6ImFmZDc3MTczYjNmMDBjYjVlZTQyZTU4OGQ0MmMyNDFjX2NvbHVtbnMiO2E6NTp7aTowO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjEyOiJmYWN1bHR5Lm5hbWUiO3M6NToibGFiZWwiO3M6ODoiRmFrdWx0YXMiO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aToxO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjEyOiJqdXJ1c2FuLm5hbWUiO3M6NToibGFiZWwiO3M6NzoiSnVydXNhbiI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjI7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6NjoiYW1vdW50IjtzOjU6ImxhYmVsIjtzOjU6IkJpYXlhIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MzthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo0OiJ5ZWFyIjtzOjU6ImxhYmVsIjtzOjU6IlRhaHVuIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6NDthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoiY3JlYXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiQ3JlYXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO319fXM6ODoiZmlsYW1lbnQiO2E6MDp7fX0=', 1779281144);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mahasiswa',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', '2026-05-20 00:08:28', '$2y$12$LndaThIXHH4C.kn2ReT2uOpdBJkbhDZpbul8HJz9YRwDGpAeke9n.', 'mahasiswa', 'AuVVrLtGt4', '2026-05-20 00:08:28', '2026-05-20 00:08:28'),
(2, 'Admin', 'admin@gmail.com', '2026-05-20 00:08:29', '$2y$12$haWiDMu9WMSG85ZPf1/jX.W9szvyrdGcTT3WVJmzFSElvGHeqI7w.', 'mahasiswa', 'UnUTakZP7I', '2026-05-20 00:08:29', '2026-05-20 00:08:29'),
(3, 'Farhan', 'farhan@gmail.com', NULL, '$2y$12$bag3IQXkqPowfq0japkOeeb9dbA4z85g/Srd0ARR5NuNZd.wwDxd6', 'mahasiswa', NULL, '2026-05-20 00:38:04', '2026-05-20 00:38:04'),
(4, 'rudiana', 'rudiana@gmail.com', NULL, '$2y$12$Pj6CSzqDyVzaaRXIRhPT/e4r1gaY6yKYDwasJ/w7sbQDdHKxR2FTO', 'mahasiswa', NULL, '2026-05-20 00:44:59', '2026-05-20 00:44:59'),
(5, 'Nurhaliza', 'nurhaliza@gmail.com', NULL, '$2y$12$Yp8AXt7ASHENQPQv3rk53elkrCiFPsySZPifwUJvtBrCjUcVHJEd.', 'mahasiswa', NULL, '2026-05-20 05:06:37', '2026-05-20 05:06:37'),
(6, 'kausar', 'kausar@gmail.com', NULL, '$2y$12$QglzowH.w7tg.M2rUadiMOb1hOgb2F4DPp/LjnJnWcbsSQuYfyrse', 'mahasiswa', NULL, '2026-05-20 05:16:53', '2026-05-20 05:16:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `faculties_code_unique` (`code`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `graduation_fees`
--
ALTER TABLE `graduation_fees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `graduation_fees_faculty_id_foreign` (`faculty_id`),
  ADD KEY `graduation_fees_jurusan_id_foreign` (`jurusan_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jurusans`
--
ALTER TABLE `jurusans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jurusans_faculty_id_foreign` (`faculty_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payments_order_id_unique` (`order_id`),
  ADD KEY `payments_registration_id_foreign` (`registration_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `registrations`
--
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `registrations_nim_unique` (`nim`),
  ADD UNIQUE KEY `registrations_registration_number_unique` (`registration_number`),
  ADD KEY `registrations_user_id_foreign` (`user_id`),
  ADD KEY `registrations_faculty_id_foreign` (`faculty_id`),
  ADD KEY `registrations_jurusan_id_foreign` (`jurusan_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `faculties`
--
ALTER TABLE `faculties`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `graduation_fees`
--
ALTER TABLE `graduation_fees`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jurusans`
--
ALTER TABLE `jurusans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `registrations`
--
ALTER TABLE `registrations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `graduation_fees`
--
ALTER TABLE `graduation_fees`
  ADD CONSTRAINT `graduation_fees_faculty_id_foreign` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `graduation_fees_jurusan_id_foreign` FOREIGN KEY (`jurusan_id`) REFERENCES `jurusans` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `jurusans`
--
ALTER TABLE `jurusans`
  ADD CONSTRAINT `jurusans_faculty_id_foreign` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_registration_id_foreign` FOREIGN KEY (`registration_id`) REFERENCES `registrations` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `registrations`
--
ALTER TABLE `registrations`
  ADD CONSTRAINT `registrations_faculty_id_foreign` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `registrations_jurusan_id_foreign` FOREIGN KEY (`jurusan_id`) REFERENCES `jurusans` (`id`) ON DELETE RESTRICT,
  ADD CONSTRAINT `registrations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
