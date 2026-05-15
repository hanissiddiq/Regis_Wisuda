<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bukti Registrasi Wisuda</title>

    <style>
        body{
            font-family: sans-serif;
            padding: 30px;
        }

        h1{
            text-align: center;
            margin-bottom: 30px;
        }

        table{
            width: 100%;
            border-collapse: collapse;
        }

        td{
            padding: 10px;
            border: 1px solid #ddd;
        }

        .title{
            width: 200px;
            font-weight: bold;
            background: #f5f5f5;
        }

        .photo{
            text-align: center;
            margin-bottom: 25px;
        }

        .photo img{
            width: 120px;
            height: 150px;
            object-fit: cover;
            border: 2px solid #ddd;
            padding: 4px;
        }
    </style>
</head>
<body>

    <h1>Bukti Registrasi Wisuda</h1>

    {{-- PAS PHOTO --}}
    <div class="photo">

        @if($registration->pas_photo)

            <img
                src="{{ public_path('storage/' . $registration->pas_photo) }}"
                alt="Pas Photo"
            >

        @endif

    </div>

    <table>

        <tr>
            <td class="title">Nomor Registrasi</td>
            <td>{{ $registration->registration_number }}</td>
        </tr>

        <tr>
            <td class="title">Nama</td>
            <td>{{ $registration->name }}</td>
        </tr>

        <tr>
            <td class="title">NIM</td>
            <td>{{ $registration->nim }}</td>
        </tr>

        <tr>
            <td class="title">Program Studi</td>
            <td>{{ $registration->jurusan->name ?? '-' }}</td>
        </tr>

        <tr>
            <td class="title">Jenis Kelamin</td>
            <td>{{ $registration->jenis_kelamin }}</td>
        </tr>

        <tr>
            <td class="title">Telepon</td>
            <td>{{ $registration->telepon }}</td>
        </tr>

        <tr>
            <td class="title">IPK</td>
            <td>{{ $registration->ipk }}</td>
        </tr>

        <tr>
            <td class="title">Tanggal Registrasi</td>
            <td>
                {{ \Carbon\Carbon::parse($registration->created_at)->translatedFormat('d F Y') }}
            </td>
        </tr>

        <tr>
            <td class="title">Status Pembayaran</td>

            <td>

                @php
                    $status = $registration->payment->transaction_status ?? 'belum_bayar';
                @endphp

                @if($status == 'settlement')

                    <span style="color: green; font-weight: bold;">
                        SUCCESS
                    </span>

                @elseif($status == 'pending')

                    <span style="color: orange; font-weight: bold;">
                        PENDING
                    </span>

                @elseif($status == 'expire')

                    <span style="color: red; font-weight: bold;">
                        EXPIRED
                    </span>

                @else

                    <span style="color: gray; font-weight: bold;">
                        BELUM BAYAR
                    </span>

                @endif

            </td>
        </tr>

    </table>

</body>
</html>