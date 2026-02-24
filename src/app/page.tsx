
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const features = [
    {
      id: 'feature-1',
      title: 'Innovación Rápida',
      description: 'Construye prototipos funcionales en cuestión de minutos con Next.js y ShadCN.',
      icon: <Rocket className="w-10 h-10 text-primary" />
    },
    {
      id: 'feature-2',
      title: 'Seguridad Integrada',
      description: 'Protege tus datos con las mejores prácticas de seguridad y Firebase.',
      icon: <Shield className="w-10 h-10 text-primary" />
    },
    {
      id: 'feature-3',
      title: 'IA Generativa',
      description: 'Potencia tu aplicación con capacidades de inteligencia artificial usando Genkit.',
      icon: <Sparkles className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-40"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Bienvenido a tu nueva App en Firebase Studio
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Tu entorno de desarrollo está listo. Comienza a construir tu próxima gran idea con la potencia de Next.js y Firebase.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Empezar ahora <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              Ver documentación
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Potencia tu Desarrollo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para escalar tu aplicación desde el primer día.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Firebase Studio App. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
