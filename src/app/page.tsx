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
  Github,
  CheckCircle2,
  GraduationCap,
  Award,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function Home() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'hero-profile');
  const githubUrl = "https://github.com/jcbodero";
  const linkedinUrl = "https://linkedin.com/in/juliobodc";

  const skillCategories = [
    { title: 'Frontend', icon: <Code2 className="w-5 h-5" />, skills: ['React (Next.js)', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', icon: <Terminal className="w-5 h-5" />, skills: ['Node.js (NestJS, AdonisJS)', 'Go', 'Python (Flask)', 'C# (ASP.NET)', 'Java (Spring Boot)'] },
    { title: 'DevOps & Cloud', icon: <Cloud className="w-5 h-5" />, skills: ['AWS', 'Azure (Básico)', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'] },
    { title: 'Arquitectura', icon: <Layers className="w-5 h-5" />, skills: ['Hexagonal', 'MVC', 'Microservicios', 'Event-Driven'] },
    { title: 'Bases de Datos', icon: <Database className="w-5 h-5" />, skills: ['SQL', 'MySQL', 'MongoDB', 'Redis', 'PostgreSQL'] },
    { title: 'Otros', icon: <Cpu className="w-5 h-5" />, skills: ['Zoho CRM', 'Apache Kafka', 'RabbitMQ', 'Git', 'Bitbucket'] },
  ];

  const experience = [
    {
      company: "XTRIM S.A.",
      role: "Especialista Desarrollo",
      period: "Julio 2025 – Actual",
      description: "Liderazgo en integración de sistemas legacy mediante PL/SQL y desarrollo de microservicios con Java Spring Boot y Flask. Validación end-to-end de provisión de servicios."
    },
    {
      company: "Nexti Business Solutions S.A.",
      role: "Ingeniero de Desarrollo",
      period: "Abril 2025 – Julio 2025",
      description: "Desarrollo de sistemas ERP utilizando ASP.NET Core, Node.js y React. Creación de reportes complejos con T-SQL y Reporting Services."
    },
    {
      company: "London Underwriters LLC",
      role: "Programador",
      period: "Marzo 2020 – Abril 2025",
      description: "Automatización de flujos de trabajo con Node.js y Zoho CRM. Desarrollo de aplicaciones web críticas para facturación y gestión de seguros mediante APIs REST."
    },
    {
      company: "Easymetering S.A.",
      role: "Programador Junior",
      period: "2019",
      description: "Implementación de seguridad con OAuth 2.0 y servicios VoIP. Desarrollo frontend con AngularJS e integración con Odoo ERP."
    }
  ];

  const achievements = [
    { title: "30% Eficiencia", description: "Incremento en despliegues con CI/CD automatizado." },
    { title: "25% Calidad", description: "Reducción de errores en producción tras migración a NestJS." },
    { title: "Automatización", description: "Proceso de facturación optimizado mediante Zoho CRM." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-accent">JCB<span className="text-primary">.</span></span>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#perfil" className="hover:text-primary transition-colors">Perfil</a>
            <a href="#experiencia" className="hover:text-primary transition-colors">Experiencia</a>
            <a href="#skills" className="hover:text-primary transition-colors">Tecnologías</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </nav>
          <Button size="sm" className="bg-accent hover:bg-accent/90">Descargar CV</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Full Stack Senior
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-900">
            Julio Cesar <span className="text-accent">Bodero</span>
          </h1>
          <p className="text-xl font-medium text-primary mb-6">Ingeniero en Telemática</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            “+5 años desarrollando soluciones escalables en frontend y backend, con enfoque en automatización, CI/CD y arquitectura moderna.”
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 px-8" asChild>
              <a href="#contacto">Contactar</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <FileText className="w-4 h-4" /> Ver Curriculum
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 -z-10 animate-pulse"></div>
          {profileImage && (
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
              <Image
                src={profileImage.imageUrl}
                alt="Julio Cesar Bodero Castro"
                width={600}
                height={600}
                className="object-cover"
                data-ai-hint="professional headshot"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* Profile Section */}
      <section id="perfil" className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Perfil Profesional</h2>
          <p className="text-xl leading-relaxed opacity-90">
            Más de 5 años de experiencia desarrollando soluciones escalables en entornos frontend y backend. 
            Especializado en optimización de procesos, automatización de despliegues y arquitectura de software 
            robusta para empresas de alta tecnología.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {achievements.map((item, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-primary mb-2">{item.title}</div>
                <div className="text-sm opacity-80">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Stack Tecnológico</h2>
            <p className="text-muted-foreground">Herramientas y tecnologías que domino para crear productos digitales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-lg">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <Badge key={j} variant="secondary" className="font-normal bg-slate-100">
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

      {/* Experience Timeline */}
      <section id="experiencia" className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Trayectoria Profesional</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                {i !== experience.length - 1 && <div className="w-0.5 h-full bg-slate-200"></div>}
              </div>
              <div className="pb-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-accent">{exp.role}</h3>
                  <Badge variant="outline" className="text-primary border-primary/20">{exp.period}</Badge>
                </div>
                <p className="font-semibold text-slate-600 mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Formación Académica</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-1">Ingeniero en Telemática</h3>
              <p className="text-primary font-medium mb-4">ESPOL (2014 – 2020)</p>
              <div className="space-y-4 text-sm opacity-80">
                <p>• Mención en Investigación</p>
                <p>• Tesis: “Predicción de incidencias de cargas de trabajo excesivas en entornos virtualizados usando aprendizaje automático”</p>
              </div>
            </div>
          </div>

          {/* Certs & Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Reconocimientos</h2>
            </div>
            <div className="space-y-4">
              {[
                "AWS Cloud Technical Essentials (2025)",
                "Agile Project Management (2025)",
                "React Avanzado (2022)"
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
              <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Idiomas
                </h4>
                <p className="text-sm">Inglés: Intermedio (Hablado) | Avanzado (Lectura Técnica)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border">
          <div className="bg-accent p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
              <p className="opacity-80 mb-8">Estoy disponible para proyectos desafiantes y roles de liderazgo técnico.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>j.boderoc@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+593 98 279 6756</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Ecuador</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12">
              <Button size="icon" variant="ghost" className="hover:bg-white/10" asChild>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="p-12 md:w-3/5 bg-slate-50 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            <p className="text-muted-foreground mb-8">
              Ya sea para una oportunidad laboral o una consulta técnica, estaré encantado de conversar.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 w-full" asChild>
              <a href="mailto:j.boderoc@gmail.com">
                Abrir Correo Electrónico <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Julio Cesar Bodero Castro. Built with Next.js & Passion.</p>
          <div className="flex gap-8">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
