<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\QuoteRequestMail;
use Illuminate\Support\Facades\Redirect;

class QuoteController extends Controller
{
    public function send(Request $request)
    {
        // 1. Validación (Coincide con los "name" de tus inputs en React)
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20', // Es nullable porque en tu HTML no tiene "required"
            'message' => 'required|string|max:5000',
        ]);

        // 2. Definir destinatario (Tu correo empresarial)
        // Lo ideal es sacarlo del .env, pero puedes ponerlo "hardcoded" temporalmente
        $recipient = config('mail.from.address'); // O escribe 'admin@tuempresa.com'

        // 3. Enviar el correo
        // Si usas colas (ShouldQueue), esto será instantáneo para el usuario
        Mail::to($recipient)->send(new QuoteRequestMail($validated));

        // 4. Redirección Inertia
        // 'success' es la clave que leemos en React con flash.success
        return Redirect::back()->with('success', 'Gracias por su mensaje. Nos pondremos en contacto pronto.');
    }
}
