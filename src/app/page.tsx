
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
  MessageSquare,
  Sparkles,
  Bot
} from 'lucide-react';

export default function Home() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'hero-profile');
  const githubUrl = "https://github.com/jcbodero";
  const linkedinUrl = "https://linkedin.com/in/juliobodc";

  const skillCategories = [
    { title: 'IA & Vibe Coding', icon: <Sparkles className="w-5 h-5" />, skills: ['IA Generativa (LLMs)', 'Entrenamiento de Modelos', 'Vibe Coding', 'ChatGPT', 'Amazon Q', 'Claude', 'Cursor'] },
    { title: 'Frontend', icon: <Code2 className="w-5 h-5" />, skills: ['React (Next.js)', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', icon: <Terminal className="w-5 h-5" />, skills: ['Node.js (NestJS, AdonisJS)', 'Go', 'Python (Flask)', 'C# (ASP.NET)', 'Java (Spring Boot)'] },
    { title: 'DevOps & Cloud', icon: <Cloud className="w-5 h-5" />, skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'] },
    { title: 'Arquitectura', icon: <Layers className="w-5 h-5" />, skills: ['Hexagonal', 'Microservicios', 'Event-Driven'] },
    { title: 'Bases de Datos', icon: <Database className="w-5 h-5" />, skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
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
    { title: "2do Lugar Amazon Q", description: "Ganador del segundo lugar en el concurso nacional Amazon Q Developer y Workshop especializado." },
    { title: "30% Eficiencia", description: "Incremento en despliegues con CI/CD automatizado." },
    { title: "25% Calidad", description: "Reducción de errores en producción tras migración a NestJS." }
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
          <div className="flex items-center gap-4">
             <Button size="icon" variant="ghost" className="hidden sm:flex" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Full Stack Senior & AI Specialist
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-900 leading-tight">
            Julio Cesar <br/><span className="text-accent">Bodero Castro</span>
          </h1>
          <p className="text-xl font-medium text-primary mb-6">Ingeniero en Telemática</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            “+6 años desarrollando soluciones escalables con enfoque en **IA Generativa**, automatización avanzada y Vibe Coding para optimizar el ciclo de desarrollo.”
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 shadow-lg shadow-accent/20" asChild>
              <a href="#contacto">Contactar</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-accent text-accent hover:bg-accent/5" asChild>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> Ver Curriculum
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10"></div>
          {profileImage && (
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl border-[12px] border-white">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={600}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            </div>
          )}
          {/* Decorative floating badges */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:block border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Expertise</p>
                <p className="text-sm font-bold">Generative AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="perfil" className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Perfil Profesional</h2>
          <p className="text-xl leading-relaxed opacity-90">
            Especializado en **IA Generativa** y optimización de procesos mediante **Vibe Coding**. 
            Aplico modelos LLM y arquitecturas modernas para reducir el tiempo de comercialización y elevar la calidad del código en entornos empresariales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {achievements.map((item, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-xl font-bold text-primary mb-2">{item.title}</div>
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
            <h2 className="text-4xl font-bold mb-4">Stack Tecnológico & AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Integración de herramientas de IA y desarrollo Full Stack de alto nivel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-slate-50 mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <Badge key={j} variant="secondary" className="font-medium bg-white text-slate-700 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
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
        <h2 className="text-4xl font-bold mb-16 text-center">Trayectoria Profesional</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-8 relative group">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20 z-10 group-hover:scale-125 transition-transform"></div>
                {i !== experience.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2"></div>}
              </div>
              <div className="pb-12">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">{exp.role}</h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">{exp.period}</Badge>
                </div>
                <p className="font-bold text-slate-800 text-lg mb-4">{exp.company}</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-primary/20 transition-all">
                   <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 relative">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-primary/20 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Formación Académica</h2>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all"></div>
              <h3 className="text-2xl font-bold mb-2">Ingeniero en Telemática</h3>
              <p className="text-primary font-bold text-lg mb-6">ESPOL (2014 – 2020)</p>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-start gap-3">• <span>Mención en Investigación</span></p>
                <p className="flex items-start gap-3">• <span>Tesis: “Predicción de incidencias de cargas de trabajo excesivas en entornos virtualizados usando aprendizaje automático”</span></p>
              </div>
            </div>
          </div>

          {/* Certs & Languages */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Certificaciones</h2>
            </div>
            <div className="space-y-4">
              {[
                "AWS Cloud Technical Essentials (2025)",
                "Agile Project Management (2025)",
                "React Avanzado (2022)"
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
              <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" /> Idiomas
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">Inglés (Hablado)</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-primary text-xs font-bold uppercase">Intermedio</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">Inglés (Lectura Técnica)</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-primary text-xs font-bold uppercase">Avanzado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-slate-100">
          <div className="bg-accent p-12 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">¿Hablamos?</h2>
              <p className="opacity-80 text-lg mb-10 leading-relaxed">Disponible para proyectos que involucren IA, arquitectura escalable y transformación digital.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">Email</p>
                    <p className="font-medium">j.boderoc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">Teléfono</p>
                    <p className="font-medium">+593 98 279 6756</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">Ubicación</p>
                    <p className="font-medium">Ecuador</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-16 relative z-10">
              <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white text-white hover:text-accent rounded-xl" asChild>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white text-white hover:text-accent rounded-xl" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
          <div className="p-16 md:w-3/5 bg-slate-50 flex flex-col justify-center text-center">
            <h3 className="text-3xl font-bold mb-6">Envíame un mensaje</h3>
            <p className="text-muted-foreground mb-10 text-lg">
              Si buscas optimizar tu flujo de desarrollo con IA o necesitas un Senior Full Stack, conversemos.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-3 w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20" asChild>
              <a href="mailto:j.boderoc@gmail.com">
                Abrir Correo Electrónico <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <p className="mt-8 text-sm text-muted-foreground">Normalmente respondo en menos de 24 horas.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-2xl tracking-tight text-accent">JCB<span className="text-primary">.</span></span>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Julio Cesar Bodero Castro.</p>
          </div>
          <div className="flex gap-10 font-medium text-slate-600">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
