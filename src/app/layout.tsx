
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Julio Cesar Bodero Castro | Ingeniero en Telemática & Senior Full Stack',
    template: '%s | Julio Bodero'
  },
  description: 'Ingeniero en Telemática con +6 años de experiencia. Especialista en IA Generativa (LLMs), Arquitectura de Microservicios, DevOps y Liderazgo Técnico. Ganador nacional en Amazon Q Developer Workshop.',
  keywords: [
    'Julio Cesar Bodero Castro', 
    'Julio Bodero', 
    'Ingeniero en Telemática', 
    'Full Stack Developer Senior', 
    'IA Generativa', 
    'Amazon Q Developer', 
    'Vibe Coding', 
    'Arquitectura de Software', 
    'Ecuador', 
    'Guayaquil', 
    'DevOps', 
    'AWS Cloud', 
    'Node.js Senior'
  ],
  authors: [{ name: 'Julio Cesar Bodero Castro' }],
  creator: 'Julio Cesar Bodero Castro',
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: 'https://jcbodero.com',
    title: 'Julio Cesar Bodero Castro | Portafolio Profesional',
    description: 'Especialista en IA Generativa, Arquitecturas Escalables y Liderazgo de Equipos Técnicos.',
    siteName: 'Portafolio de Julio Bodero',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julio Cesar Bodero Castro | Senior Full Stack & Lead',
    description: 'Liderando el futuro con IA Generativa y Arquitectura de alto rendimiento.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
