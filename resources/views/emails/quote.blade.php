<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Nueva Cotización - Oasysred</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f1f5f9;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            -webkit-font-smoothing: antialiased;
            color: #334155;
        }

        .wrapper {
            width: 100%;
            padding: 40px 0;
            background-color: #f1f5f9;
        }

        .card {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border: 1px solid #e2e8f0;
        }

        .header {
            background-color: #0f172a;
            padding: 32px 40px;
            border-bottom: 4px solid #3b82f6;
        }

        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        .header .subtitle {
            color: #94a3b8;
            font-size: 14px;
            margin-top: 8px;
            font-weight: 400;
        }

        .body {
            padding: 40px;
        }

        .tag {
            display: inline-block;
            padding: 6px 12px;
            background-color: #dbeafe;
            color: #1e40af;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 24px;
        }

        .section-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 16px;
            display: block;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 8px;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            margin-bottom: 32px;
        }

        .info-item h3 {
            margin: 0 0 4px 0;
            font-size: 13px;
            color: #64748b;
            font-weight: 500;
        }

        .info-item p {
            margin: 0;
            font-size: 16px;
            color: #0f172a;
            font-weight: 600;
        }

        .info-item a {
            color: #2563eb;
            text-decoration: none;
        }

        .message-box {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 24px;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #cbd5e1;
        }

        .message-content {
            color: #334155;
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
            white-space: pre-line;
        }

        .footer {
            background-color: #f8fafc;
            padding: 24px 40px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-text {
            font-size: 12px;
            color: #94a3b8;
            max-width: 60%;
        }

        .btn-reply {
            background-color: #3b82f6;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: background-color 0.2s;
        }

        .btn-reply:hover {
            background-color: #2563eb;
        }

        @media (max-width: 600px) {
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .header,
            .body,
            .footer {
                padding: 24px;
            }

            .footer {
                flex-direction: column;
                gap: 20px;
                text-align: center;
            }

            .footer-text {
                max-width: 100%;
            }

            .btn-reply {
                width: 100%;
                box-sizing: border-box;
                text-align: center;
            }
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="card">
            <div class="header">
                <h1>🎉 Solicitud de Cotización</h1>
                <div class="subtitle">Nueva oportunidad recibida desde Oasysred</div>
            </div>
            <div class="body">
                <span class="tag">Nuevo Lead</span>

                <span class="section-label">Datos del Cliente</span>
                <div class="contact-grid">
                    <div class="info-item">
                        <h3>Nombre</h3>
                        <p>{{ $data['name'] }}</p>
                    </div>
                    <div class="info-item">
                        <h3>Email</h3>
                        <p><a href="mailto:{{ $data['email'] }}">{{ $data['email'] }}</a></p>
                    </div>
                    <div class="info-item">
                        <h3>Teléfono</h3>
                        <p>
                            @if (!empty($data['phone']))
                            {{ $data['phone'] }}
                            @else
                            <span style="color:#cbd5e1; font-weight:400;">No registrado</span>
                            @endif
                        </p>
                    </div>
                    <div class="info-item">
                        <h3>Fecha</h3>
                        <p>{{ date('d/m/Y') }}</p>
                    </div>
                </div>

                <span class="section-label">Detalles del Requerimiento</span>
                <div class="message-box">
                    <p class="message-content">
                        {!! nl2br(e($data['message'])) !!}
                    </p>
                </div>
            </div>
            <div class="footer">
                <div class="footer-text">
                    <strong>Nota Interna:</strong> Este correo es generado automáticamente para el equipo de Oasysred. El cliente no recibe esta copia.
                </div>
                <a href="mailto:{{ $data['email'] }}" class="btn-reply">Responder al Cliente</a>
            </div>
        </div>
    </div>
</body>

</html>