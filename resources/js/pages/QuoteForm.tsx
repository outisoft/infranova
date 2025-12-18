import React from 'react';
import { useForm } from '@inertiajs/react';

export default function QuoteForm() {
    // Inicializamos el formulario con useForm
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        // Enviamos los datos a la ruta definida en Laravel
        post('/enviar-cotizacion', {
            onSuccess: () => reset(), // Limpia el formulario si todo sale bien
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Solicitar Cotización</h2>

            {/* Mensaje de éxito (necesitas pasar la prop flash desde Laravel o usar wasSuccessful) */}
            {wasSuccessful && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                    ¡Gracias! Hemos recibido tu solicitud.
                </div>
            )}

            <form onSubmit={submit}>
                {/* Nombre */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                {/* Teléfono */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
                    <input
                        type="text"
                        value={data.phone}
                        onChange={e => setData('phone', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                     {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                </div>

                {/* Mensaje */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
                    <textarea
                        value={data.message}
                        onChange={e => setData('message', e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    ></textarea>
                    {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                </div>

                {/* Botón Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${processing && 'opacity-50 cursor-not-allowed'}`}
                >
                    {processing ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
            </form>
        </div>
    );
}