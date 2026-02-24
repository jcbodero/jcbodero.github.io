import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Code2, 
  Layers, 
  Cloud, 
  Database, 
  Terminal, 
  Cpu, 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone,
  FileText,
  TrendingUp,
  Github
} from 'lucide-react';

export default function Home() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'hero-profile');

  const skillCategories = [
    { title: 'Frontend', icon: <Code2 />, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', icon: <Terminal />, skills: ['Node.js', 'Go', 'Python', 'REST APIs'] },
    { title: 'Cloud & DevOps', icon: <Cloud />, skills: ['AWS', 'Firebase', 'Docker', 'CI/CD'] },
    { title: 'Bases de Datos', icon: <Database />, skills: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis'] },
    { title: 'Arquitectura', icon: <Layers />, skills: ['Microservicios', 'Event-Driven', 'Serverless'] },
    { title: 'ERP/CRM', icon: <Cpu />, skills: ['SAP', 'Odoo', 'Salesforce'] },
  ];

  const achievements = [
    { title: "30% Eficiencia", description: "Incremento en despliegues con CI/CD automatizado." },
    { title: "99.9% Uptime", description: "Mantenimiento de sistemas críticos en la nube." },
    { title: "Scale-up", description: "Migración exitosa a arquitectura de microservicios." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1">
            Disponible para nuevos retos
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Julio <span className="text-primary">Bodero</span>
          </h1>
          <p className="text-2xl font-medium text-accent mb-4">Architect & Full-Stack Developer</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Especializado en construir soluciones robustas, escalables y centradas en el usuario. 
            Apasionado por la arquitectura de sistemas y la eficiencia operativa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Contáctame
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <FileText className="w-4 h-4" /> Descargar CV
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 -z-10"></div>
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt="Julio Bodero"
              width={600}
              height={600}
              className="rounded-3xl object-cover shadow-2xl"
              data-ai-hint="professional headshot"
              priority
            />
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-center">
          {achievements.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-accent">{item.title}</span>
              <span className="text-sm text-muted-foreground">{item.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <Badge key={j} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Placeholder */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Trayectoria Profesional</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-none border bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-accent">Senior Software Architect</span>
                <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">Actualidad</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">TechSolutions Inc.</p>
              <p className="text-sm">Liderazgo técnico en la migración a la nube y optimización de microservicios.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-accent text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 italic text-sky-200">¿Hablamos de tu próximo proyecto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              <span>contacto@juliobodero.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span>España (Remoto)</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary">
              <Linkedin className="w-6 h-6 fill-primary" />
              <span className="text-white">/in/juliobodero</span>
            </div>
          </div>
          <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-accent">
            Enviar un Mensaje
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Julio Bodero. Built with Passion & Tech.</p>
          <div className="flex gap-6">
            <Github className="w-5 h-5 hover:text-primary cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
