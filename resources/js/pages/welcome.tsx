import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Activity,
    Camera,
    CheckCircle,
    Cpu,
    Globe,
    Lock,
    Menu,
    Server,
    Shield,
    Smartphone,
    X,
} from 'lucide-react';
import { useState } from 'react';

export default function Welcome() {
    const { flash } = usePage().props as any;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const services = [
        {
            title: 'CCTV y Seguridad',
            description:
                'Instalación y mantenimiento de sistemas de cámaras de seguridad de última generación para proteger lo que más importa.',
            icon: <Camera className="h-8 w-8 text-blue-500" />,
        },
        {
            title: 'Infraestructura de Redes',
            description:
                'Diseño e implementación de cableado estructurado y redes robustas para empresas y hogares.',
            icon: <Server className="h-8 w-8 text-blue-500" />,
        },
        {
            title: 'Control de Accesos',
            description:
                'Sistemas biométricos y de tarjeta para gestionar y restringir el acceso a sus instalaciones.',
            icon: <Lock className="h-8 w-8 text-blue-500" />,
        },
        {
            title: 'Domótica',
            description:
                'Automatización inteligente para el control de iluminación, climatización y seguridad desde su dispositivo móvil.',
            icon: <Smartphone className="h-8 w-8 text-blue-500" />,
        },
        {
            title: 'Mantenimiento',
            description:
                'Soporte técnico preventivo y correctivo para garantizar la operatividad continua de sus equipos.',
            icon: <Activity className="h-8 w-8 text-blue-500" />,
        },
        {
            title: 'Consultoría TI',
            description:
                'Asesoramiento experto para optimizar su infraestructura tecnológica y reducir costos.',
            icon: <Cpu className="h-8 w-8 text-blue-500" />,
        },
    ];

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Enviamos a la ruta que definimos en Laravel (routes/web.php)
        post('/enviar-cotizacion', {
            preserveScroll: true,
            onSuccess: () => reset(), // Limpia el formulario si todo sale bien
        });
    };

    return (
        <>
            <Head title="OASYSRED - Seguridad y Tecnología">
                <meta
                    name="description"
                    content="Expertos en instalación, mantenimiento y soporte de equipos de CCTV, redes, control de accesos y domótica."
                />
            </Head>

            <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500 selection:text-white">
                {/* Navigation */}
                <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-2">
                            <Shield className="h-8 w-8 text-blue-500" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                OASYSRED
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden items-center gap-8 md:flex">
                            <a
                                href="#servicios"
                                className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
                            >
                                Servicios
                            </a>
                            <a
                                href="#nosotros"
                                className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
                            >
                                Nosotros
                            </a>
                            <a
                                href="#contacto"
                                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                            >
                                Contáctanos
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="text-slate-300 md:hidden"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#servicios"
                                    className="text-sm font-medium text-slate-300 hover:text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Servicios
                                </a>
                                <a
                                    href="#nosotros"
                                    className="text-sm font-medium text-slate-300 hover:text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Nosotros
                                </a>
                                <a
                                    href="#contacto"
                                    className="text-sm font-medium text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Contáctanos
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -ml-[40rem] h-[40rem] w-[80rem] rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-[30rem] w-[50rem] rounded-full bg-indigo-500/10 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                        <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-sm">
                            <span className="mr-2 flex h-2 w-2">
                                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                            </span>
                            Soluciones Tecnológicas Integrales
                        </div>
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                            Seguridad y Tecnología <br />
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                                al Alcance de tu Mano
                            </span>
                        </h1>
                        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
                            Especialistas en CCTV, infraestructura de redes,
                            control de accesos y domótica. Transformamos su
                            seguridad con tecnología de punta.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="#contacto"
                                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-blue-500/40"
                            >
                                Solicitar Cotización
                            </a>
                            <a
                                href="#servicios"
                                className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800"
                            >
                                Ver Servicios
                                <Activity className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="servicios" className="bg-slate-900 py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Nuestros Servicios
                            </h2>
                            <p className="mx-auto max-w-2xl text-slate-400">
                                Ofrecemos un abanico completo de soluciones para
                                garantizar la seguridad y eficiencia de su
                                infraestructura.
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
                                >
                                    <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-3 ring-1 ring-blue-500/20 group-hover:bg-blue-500/20">
                                        {service.icon}
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Us Section */}
                <section id="nosotros" className="relative py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                                    ¿Por qué elegir Infranova?
                                </h2>
                                <p className="mb-8 text-lg text-slate-400">
                                    Nos destacamos por nuestro compromiso con la
                                    calidad y la satisfacción del cliente. No
                                    solo instalamos equipos, creamos soluciones
                                    a medida.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        'Personal altamente capacitado y certificado.',
                                        'Equipos de marcas líderes en el mercado.',
                                        'Garantía y soporte post-venta asegurado.',
                                        'Proyectos personalizados según sus necesidades.',
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-500" />
                                            <span className="text-slate-300">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 ring-1 ring-slate-700">
                                    {/* Abstract representation of technology/security */}
                                    <div className="grid h-full grid-cols-2 gap-4">
                                        <div className="rounded-xl bg-slate-800/50 p-4 ring-1 ring-slate-700/50">
                                            <Camera className="mb-4 h-10 w-10 text-blue-400" />
                                            <div className="h-2 w-20 rounded bg-slate-700" />
                                            <div className="mt-2 h-2 w-12 rounded bg-slate-700" />
                                        </div>
                                        <div className="translate-y-8 rounded-xl bg-slate-800/50 p-4 ring-1 ring-slate-700/50">
                                            <Globe className="mb-4 h-10 w-10 text-indigo-400" />
                                            <div className="h-2 w-20 rounded bg-slate-700" />
                                            <div className="mt-2 h-2 w-12 rounded bg-slate-700" />
                                        </div>
                                        <div className="-translate-y-8 rounded-xl bg-slate-800/50 p-4 ring-1 ring-slate-700/50">
                                            <Shield className="mb-4 h-10 w-10 text-emerald-400" />
                                            <div className="h-2 w-20 rounded bg-slate-700" />
                                            <div className="mt-2 h-2 w-12 rounded bg-slate-700" />
                                        </div>
                                        <div className="rounded-xl bg-slate-800/50 p-4 ring-1 ring-slate-700/50">
                                            <Server className="mb-4 h-10 w-10 text-amber-400" />
                                            <div className="h-2 w-20 rounded bg-slate-700" />
                                            <div className="mt-2 h-2 w-12 rounded bg-slate-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contacto" className="bg-blue-600 py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-12 text-center">
                            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                                ¿Listo para mejorar su seguridad?
                            </h2>
                            <p className="text-xl text-blue-100">
                                Contáctenos hoy mismo para una evaluación
                                gratuita y descubra cómo podemos ayudarle.
                            </p>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Left Column: Contact Form */}
                            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                                <div className="p-8">
                                    <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                        Envíenos un mensaje
                                    </h3>
                                    {flash?.success && (
                                        <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 border border-green-200">
                                            <strong className="font-bold">¡Enviado!</strong> {flash.success}
                                        </div>
                                    )}
                                    <form onSubmit={submit} className="space-y-5">
                                        {/* NOMBRE */}
                                        <div>
                                            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">
                                                Nombre Completo
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                disabled={processing}
                                                className={`block w-full rounded-lg border bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                                    ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                                                placeholder="Juan Pérez"
                                            />
                                            {/* Mensaje de error de validación */}
                                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                        </div>

                                        {/* EMAIL */}
                                        <div>
                                            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
                                                Correo Electrónico
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                disabled={processing}
                                                className={`block w-full rounded-lg border bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                                    ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                                                placeholder="juan@ejemplo.com"
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                        </div>

                                        {/* TELEFONO */}
                                        <div>
                                            <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-slate-700">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}
                                                disabled={processing}
                                                className={`block w-full rounded-lg border bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                                    ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                        </div>

                                        {/* MENSAJE */}
                                        <div>
                                            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">
                                                Mensaje
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                disabled={processing}
                                                className={`block w-full rounded-lg border bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                                                    ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                                                placeholder="¿En qué podemos ayudarle?"
                                            />
                                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                        </div>

                                        {/* BOTÓN SUBMIT */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={processing} // Deshabilita el botón mientras envía
                                                className={`flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none 
                                                    ${processing ? 'opacity-70 cursor-wait' : 'hover:bg-blue-500 hover:shadow-blue-500/50'}`}
                                            >
                                                {processing ? 'Enviando...' : 'Enviar Mensaje'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Right Column: Contact Info */}
                            <div className="flex flex-col justify-center space-y-8 text-white">
                                <div>
                                    <h3 className="mb-6 text-2xl font-bold">
                                        Información de Contacto
                                    </h3>
                                    <p className="mb-8 text-blue-100">
                                        Estamos aquí para responder a todas sus
                                        preguntas sobre nuestros servicios de
                                        seguridad y tecnología.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                Dirección
                                            </h4>
                                            <p className="mt-1 text-blue-100">
                                                Av. Principal 123, Edificio
                                                Tecnológico
                                                <br />
                                                Ciudad, País 12345
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                Teléfono
                                            </h4>
                                            <p className="mt-1 text-blue-100">
                                                +1 (234) 567-890
                                            </p>
                                            <p className="text-sm text-blue-200">
                                                Lunes a Viernes, 9am - 6pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                Correo Electrónico
                                            </h4>
                                            <p className="mt-1 text-blue-100">
                                                contacto@infranova.com
                                            </p>
                                            <p className="text-blue-100">
                                                soporte@infranova.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-900 bg-slate-950 py-12">
                    <div className="mx-auto max-w-7xl px-6 text-center md:text-left">
                        <div className="grid gap-8 md:grid-cols-4">
                            <div className="col-span-1 md:col-span-2">
                                <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                                    <Shield className="h-6 w-6 text-blue-500" />
                                    <span className="text-lg font-bold text-white">
                                        INFRANOVA
                                    </span>
                                </div>
                                <p className="max-w-xs text-sm text-slate-500">
                                    Soluciones integrales en seguridad
                                    electrónica, redes y automatización para su
                                    tranquilidad.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-4 font-semibold text-white">
                                    Servicios
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li>CCTV</li>
                                    <li>Redes</li>
                                    <li>Control de Acceso</li>
                                    <li>Domótica</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 font-semibold text-white">
                                    Contacto
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li>contacto@infranova.com</li>
                                    <li>+1 (234) 567-890</li>
                                    <li>Ciudad, País</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-slate-900 pt-8 text-center text-sm text-slate-600">
                            &copy; {new Date().getFullYear()} Infranova. Todos
                            los derechos reservados.
                        </div>
                    </div>
                </footer>

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110 focus:outline-none"
                    aria-label="Chat on WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="#25D366"
                        viewBox="0 0 256 256"
                        className="drop-shadow-lg"
                    >
                        <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.13,72.13,0,0,1-72-72A24,24,0,0,1,104,80l9.6,19.2L102,110.77a8,8,0,0,0-1.47,9.6,56.55,56.55,0,0,0,32,32A8,8,0,0,0,142.23,151l11.57-11.57L173,149A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                    </svg>
                </a>
            </div>
        </>
    );
}
