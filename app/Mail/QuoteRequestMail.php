<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class QuoteRequestMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    // Aquí guardamos los datos del formulario
    public $data;

    /**
     * Create a new message instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            // Asunto del correo (puedes incluir el nombre del cliente para identificarlo rápido)
            subject: 'Nueva Solicitud de Cotización: ' . $this->data['name'],

            // Esto hace que al dar clic en "Responder" en tu email, le respondas al cliente
            replyTo: [
                new Address($this->data['email'], $this->data['name'])
            ]
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.quote', // Asegúrate de tener resources/views/emails/quote.blade.php
            with: [
                'data' => $this->data,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     */
    public function attachments(): array
    {
        return [];
    }
}
