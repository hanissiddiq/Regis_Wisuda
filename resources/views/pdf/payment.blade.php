<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bukti Pembayaran Wisuda</title>

    <style>
        body {
            font-family: sans-serif;
            padding: 30px;
        }

        .title {
            text-align: center;
            margin-bottom: 30px;
        }

        .card {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 10px;
        }

        table {
            width: 100%;
        }

        td {
            padding: 8px 0;
        }

        .status {
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div class="title">
        <h1>BUKTI PEMBAYARAN WISUDA</h1>
    </div>

    <div class="card">

        <table>
            <tr>
                <td>Nama</td>
                <td>: {{ $payment->registration->name }}</td>
            </tr>

            <tr>
                <td>NIM</td>
                <td>: {{ $payment->registration->nim }}</td>
            </tr>

            <tr>
                <td>Order ID</td>
                <td>: {{ $payment->order_id }}</td>
            </tr>

            <tr>
                <td>Metode Pembayaran</td>
                <td>: {{ $payment->payment_type }}</td>
            </tr>

            <tr>
                <td>Status</td>
                <td class="status">
                    : {{
                        $payment->transaction_status == 'settlement'
                            ? 'SUCCESS'
                            : ($payment->transaction_status == 'pending'
                                ? 'PENDING'
                                : ($payment->transaction_status == 'expire'
                                    ? 'EXPIRED'
                                    : strtoupper($payment->transaction_status)))
                    }}
                </td>
            </tr>

            <tr>
                <td>Total Pembayaran</td>
                <td>: Rp {{ number_format($payment->gross_amount, 0, ',', '.') }}</td>
            </tr>

            <tr>
                <td>Tanggal Pembayaran</td>
                <td>: {{ $payment->transaction_time }}</td>
            </tr>
        </table>

    </div>

</body>
</html>