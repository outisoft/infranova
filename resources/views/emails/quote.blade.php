<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        h2 {
            color: #2563EB;
        }

        .label {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>🚀 Nueva solicitud desde la Landing Page</h2>

        <p><span class="label">Nombre:</span> {{ $data['name'] }}</p>
        <p><span class="label">Email:</span> <a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></p>

        <p><span class="label">Teléfono:</span>
            @if (!empty($data['phone']))
                {{ $data['phone'] }}
            @else
                <em style="color:#999">No especificado</em>
            @endif
        </p>

        <hr>

        <h3>Mensaje:</h3>
        <p style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">
            {{ nl2br(e($data['message'])) }}
        </p>
    </div>
</body>

</html>
