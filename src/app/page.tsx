
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Layers, 
  Cloud, 
  Database, 
  Terminal, 
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
  Server,
  Users,
  Zap,
  Trophy,
  Cpu,
  ShieldCheck,
  Languages
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translations = {
  es: {
    nav: {
      profile: "Perfil",
      experience: "Experiencia",
      skills: "Tecnologías",
      contact: "Contacto",
      resume: "LinkedIn"
    },
    hero: {
      title: "Julio Cesar",
      subtitle: "Bodero Castro",
      role: "Senior Full Stack & Lead",
      degree: "Ingeniero en Telemática",
      description: "Ingeniero en Telemática con mención en Investigación y más de 6 años de experiencia diseñando, desarrollando y optimizando plataformas tecnológicas escalables. Especializado en arquitectura de microservicios, integración de sistemas, optimización de rendimiento e implementación de soluciones con IA Generativa (LLMs). Experiencia liderando equipos técnicos y mejorando procesos mediante automatización y DevOps.",
      cta: "Contactar",
      viewProfile: "Ver Perfil Profesional",
      expertise: "Expertise",
      expertiseValue: "Performance & Lead"
    },
    profile: {
      title: "Perfil Profesional",
      description: "Experto en levantar plataformas robustas y optimizar rendimientos críticos mediante la mejora de arquitecturas de software. Con experiencia liderando equipos de 5 a 7 personas, aplico IA Generativa y Vibe Coding para acelerar despliegues y garantizar la excelencia técnica en cada entrega.",
      achievements: [
        { title: "2do Lugar Amazon Q", desc: "Reconocimiento nacional en el concurso Amazon Q Developer, un evento oficial de AWS patrocinado por Xtrim, destacando en el Workshop especializado de IA." },
        { title: "Arquitectura Escalable", desc: "Experto en el levantamiento de plataformas de alta disponibilidad y optimización de arquitecturas críticas para garantizar la escalabilidad." },
        { title: "Liderazgo de Equipos", desc: "Gestión exitosa de equipos técnicos multidisciplinarios (5 a 7 personas) bajo marcos de trabajo ágiles y estándares de excelencia." }
      ]
    },
    skills: {
      title: "Stack Tecnológico & Liderazgo",
      subtitle: "Dominio técnico integral, desde la infraestructura hasta la gestión de equipos de alto rendimiento.",
      categories: [
        { title: 'IA & Vibe Coding', skills: ['IA Generativa (LLMs)', 'Entrenamiento de Modelos', 'Vibe Coding', 'ChatGPT', 'Amazon Q', 'Claude', 'Cursor'] },
        { title: 'Liderazgo & Gestión', skills: ['Liderazgo de Equipos (5-7 personas)', 'Gestión de Proyectos Técnicos', 'Metodologías Ágiles', 'Mentoring'] },
        { title: 'Arquitectura & Optimización', skills: ['Levantamiento de Plataformas', 'Optimización de Rendimiento', 'Arquitectura Hexagonal', 'Microservicios', 'Event-Driven'] },
        { title: 'Infraestructura', skills: ['Servidores Windows & Linux', 'Mantenimiento On-Premise', 'Infraestructura Cloud', 'Instalación de Servidores'] },
        { title: 'Backend', skills: ['Node.js (NestJS, AdonisJS)', 'Go', 'Python (Flask)', 'C# (ASP.NET)', 'Java (Spring Boot)'] },
        { title: 'DevOps & Cloud', skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'] },
        { title: 'Bases de Datos', skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle PL/SQL'] },
      ]
    },
    experience: {
      title: "Trayectoria Profesional",
      items: [
        {
          company: "XTRIM S.A.",
          role: "Especialista Desarrollo",
          period: "Julio 2025 – Actual",
          description: "Liderazgo técnico en la integración de sistemas legacy mediante PL/SQL y desarrollo de microservicios robustos con Java Spring Boot y Flask. Supervisión de validaciones end-to-end para garantizar la provisión eficiente de servicios a gran escala."
        },
        {
          company: "Nexti Business Solutions S.A.",
          role: "Ingeniero de Desarrollo",
          period: "Abril 2025 – Julio 2025",
          description: "Diseño y despliegue de sistemas ERP utilizando ASP.NET Core, Node.js y React. Implementación de reportes analíticos complejos mediante T-SQL y Reporting Services para la toma de decisiones estratégicas."
        },
        {
          company: "London Underwriters LLC",
          role: "Programador",
          period: "Marzo 2020 – Abril 2025",
          description: "Automatización integral de flujos de trabajo críticos utilizando Node.js y Zoho CRM. Desarrollo de aplicaciones web de alta disponibilidad para facturación y gestión de seguros mediante arquitecturas basadas en APIs REST."
        },
        {
          company: "Easymetering S.A.",
          role: "Programador Junior",
          period: "2019",
          description: "Fortalecimiento de la seguridad de plataformas mediante OAuth 2.0 y servicios VoIP. Desarrollo frontend con AngularJS e integración técnica con el ecosistema Odoo ERP."
        }
      ]
    },
    education: {
      academicTitle: "Formación Académica",
      degree: "Ingeniero en Telemática",
      university: "ESPOL (2014 – 2020)",
      thesis: "Mención en Investigación. Tesis: “Predicción de incidencias de cargas de trabajo excesivas en entornos virtualizados usando aprendizaje automático”",
      certsTitle: "Certificaciones",
      languages: {
        title: "Idiomas",
        englishSpoken: "Inglés (Hablado)",
        englishReading: "Inglés (Lectura Técnica)",
        levelInter: "Intermedio",
        levelAdv: "Avanzado"
      }
    },
    contact: {
      title: "¿Hablamos?",
      subtitle: "Disponible para liderar proyectos que involucren IA, arquitectura escalable y optimización de plataformas de alto rendimiento.",
      formTitle: "Envíame un mensaje",
      formDesc: "Si buscas optimizar tu plataforma tecnológica o necesitas un Líder Técnico Senior con enfoque en resultados y escalabilidad, conversemos sobre cómo puedo aportar valor a tu organización.",
      emailBtn: "Abrir Correo Electrónico",
      whatsappBtn: "Chatear por WhatsApp",
      responseTime: "Normalmente respondo en menos de 24 horas."
    }
  },
  en: {
    nav: {
      profile: "Profile",
      experience: "Experience",
      skills: "Technologies",
      contact: "Contact",
      resume: "LinkedIn"
    },
    hero: {
      title: "Julio Cesar",
      subtitle: "Bodero Castro",
      role: "Senior Full Stack & Lead",
      degree: "Telematics Engineer",
      description: "Telematics Engineer with a minor in Research and over 6 years of experience designing, developing, and optimizing scalable technological platforms. Specialized in microservices architecture, systems integration, performance optimization, and GenAI implementation (LLMs). Experience leading technical teams and improving processes through automation and DevOps.",
      cta: "Contact Me",
      viewProfile: "View Professional Profile",
      expertise: "Expertise",
      expertiseValue: "Performance & Lead"
    },
    profile: {
      title: "Professional Profile",
      description: "Expert in building robust platforms and optimizing critical performance through software architecture enhancement. With experience leading teams of 5 to 7 people, I apply Generative AI and Vibe Coding to accelerate deployments and ensure technical excellence in every delivery.",
      achievements: [
        { title: "2nd Place Amazon Q", desc: "National recognition in the Amazon Q Developer contest, an official AWS event sponsored by Xtrim, excelling in the specialized AI Workshop." },
        { title: "Scalable Architecture", desc: "Expert in setting up high-availability platforms and optimizing critical architectures to ensure scalability." },
        { title: "Team Leadership", desc: "Successful management of multidisciplinary technical teams (5 to 7 people) under agile frameworks and excellence standards." }
      ]
    },
    skills: {
      title: "Tech Stack & Leadership",
      subtitle: "Comprehensive technical mastery, from infrastructure to high-performance team management.",
      categories: [
        { title: 'AI & Vibe Coding', skills: ['Generative AI (LLMs)', 'Model Training', 'Vibe Coding', 'ChatGPT', 'Amazon Q', 'Claude', 'Cursor'] },
        { title: 'Leadership & Mgmt', skills: ['Team Leadership (5-7 people)', 'Technical Project Management', 'Agile Methodologies', 'Mentoring'] },
        { title: 'Architecture & Opt.', skills: ['Platform Setup', 'Performance Optimization', 'Hexagonal Architecture', 'Microservices', 'Event-Driven'] },
        { title: 'Infrastructure', skills: ['Windows & Linux Servers', 'On-Premise Maintenance', 'Cloud Infrastructure', 'Server Installation'] },
        { title: 'Backend', skills: ['Node.js (NestJS, AdonisJS)', 'Go', 'Python (Flask)', 'C# (ASP.NET)', 'Java (Spring Boot)'] },
        { title: 'DevOps & Cloud', skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'] },
        { title: 'Databases', skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle PL/SQL'] },
      ]
    },
    experience: {
      title: "Professional Journey",
      items: [
        {
          company: "XTRIM S.A.",
          role: "Development Specialist",
          period: "July 2025 – Present",
          description: "Technical leadership in legacy systems integration using PL/SQL and development of robust microservices with Java Spring Boot and Flask. Oversight of end-to-end validations to ensure efficient large-scale service provisioning."
        },
        {
          company: "Nexti Business Solutions S.A.",
          role: "Development Engineer",
          period: "April 2025 – July 2025",
          description: "Design and deployment of ERP systems using ASP.NET Core, Node.js, and React. Implementation of complex analytical reports via T-SQL and Reporting Services for strategic decision making."
        },
        {
          company: "London Underwriters LLC",
          role: "Programmer",
          period: "March 2020 – April 2025",
          description: "End-to-end automation of critical workflows using Node.js and Zoho CRM. Development of high-availability web applications for billing and insurance management through REST API-based architectures."
        },
        {
          company: "Easymetering S.A.",
          role: "Junior Programmer",
          period: "2019",
          description: "Strengthening platform security through OAuth 2.0 and VoIP services. Frontend development with AngularJS and technical integration with the Odoo ERP ecosystem."
        }
      ]
    },
    education: {
      academicTitle: "Academic Training",
      degree: "Telematics Engineer",
      university: "ESPOL (2014 – 2020)",
      thesis: "Minor in Research. Thesis: 'Prediction of excessive workload incidents in virtualized environments using machine learning'",
      certsTitle: "Certifications",
      languages: {
        title: "Languages",
        englishSpoken: "English (Spoken)",
        englishReading: "English (Technical Reading)",
        levelInter: "Intermediate",
        levelAdv: "Advanced"
      }
    },
    contact: {
      title: "Let's Talk?",
      subtitle: "Available to lead projects involving AI, scalable architecture, and high-performance platform optimization.",
      formTitle: "Send me a message",
      formDesc: "If you are looking to optimize your technology platform or need a Senior Technical Lead focused on results and scalability, let's talk about how I can bring value to your organization.",
      emailBtn: "Open Email",
      whatsappBtn: "Chat on WhatsApp",
      responseTime: "I usually respond in less than 24 hours."
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white" />; // Evita parpadeos de hidratación
  }

  const t = translations[lang];
  const profileImage = PlaceHolderImages.find(img => img.id === 'hero-profile');
  const githubUrl = "https://github.com/jcbodero";
  const linkedinUrl = "https://linkedin.com/in/juliobodc";
  const whatsappUrl = "https://wa.me/593982796756";

  const skillIcons = [
    <Sparkles key="1" className="w-5 h-5" />,
    <Users key="2" className="w-5 h-5" />,
    <Layers key="3" className="w-5 h-5" />,
    <Server key="4" className="w-5 h-5" />,
    <Terminal key="5" className="w-5 h-5" />,
    <Cloud key="6" className="w-5 h-5" />,
    <Database key="7" className="w-5 h-5" />
  ];

  const achievementIcons = [
    <Trophy key="a1" className="w-10 h-10 text-primary mb-4" />,
    <Cpu key="a2" className="w-10 h-10 text-primary mb-4" />,
    <ShieldCheck key="a3" className="w-10 h-10 text-primary mb-4" />
  ];

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-accent">JCB<span className="text-primary">.</span></span>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#perfil" className="hover:text-primary transition-colors">{t.nav.profile}</a>
            <a href="#experiencia" className="hover:text-primary transition-colors">{t.nav.experience}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{t.nav.skills}</a>
            <a href="#contacto" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Languages className="w-4 h-4" />
                  <span className="uppercase">{lang}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang('es')}>Español (ESP)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('en')}>English (ENG)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button size="icon" variant="ghost" className="hidden sm:flex" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">{t.nav.resume}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            {t.hero.role}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-900 leading-tight text-balance">
            {t.hero.title} <span className="text-accent">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl font-medium text-primary mb-6">{t.hero.degree}</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed text-left">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 shadow-lg shadow-accent/20" asChild>
              <a href="#contacto">{t.hero.cta}</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-accent text-accent hover:bg-accent/5" asChild>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> {t.hero.viewProfile}
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
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:block border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{t.hero.expertise}</p>
                <p className="text-sm font-bold">{t.hero.expertiseValue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="perfil" className="py-24 bg-accent text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t.profile.title}</h2>
          <p className="text-xl leading-relaxed opacity-90 text-left md:text-justify max-w-4xl mx-auto">
            {t.profile.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {t.profile.achievements.map((item, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all flex flex-col items-center justify-center text-center min-h-[260px]">
                <div className="flex flex-col items-center">
                  {achievementIcons[i]}
                  <div className="text-xl font-bold text-primary mb-3">{item.title}</div>
                  <div className="text-sm opacity-90 text-left leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.skills.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.categories.map((cat, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2 border-b border-slate-50 mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                    {skillIcons[i]}
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
        <h2 className="text-4xl font-bold mb-16 text-center">{t.experience.title}</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {t.experience.items.map((exp, i) => (
            <div key={i} className="flex gap-8 relative group">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-primary ring-4 ring-primary/20 z-10 group-hover:scale-125 transition-transform"></div>
                {i !== t.experience.items.length - 1 && <div className="w-0.5 h-full bg-slate-200 mt-2"></div>}
              </div>
              <div className="pb-12 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">{exp.role}</h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">{exp.period}</Badge>
                </div>
                <p className="font-bold text-slate-800 text-lg mb-4">{exp.company}</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-primary/20 transition-all">
                   <p className="text-muted-foreground leading-relaxed text-left">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 relative">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-primary/20 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">{t.education.academicTitle}</h2>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-all"></div>
              <h3 className="text-2xl font-bold mb-2">{t.education.degree}</h3>
              <p className="text-primary font-bold text-lg mb-6">{t.education.university}</p>
              <div className="space-y-4 text-slate-300 text-left">
                <p className="flex items-start gap-3">• <span>{t.education.thesis}</span></p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">{t.education.certsTitle}</h2>
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
                  <MessageSquare className="w-5 h-5 text-primary" /> {t.education.languages.title}
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">{t.education.languages.englishSpoken}</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-primary text-xs font-bold uppercase">{t.education.languages.levelInter}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">{t.education.languages.englishReading}</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-primary text-xs font-bold uppercase">{t.education.languages.levelAdv}</span>
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
              <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
              <p className="opacity-80 text-lg mb-10 leading-relaxed text-left">{t.contact.subtitle}</p>
              <div className="space-y-6">
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
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">WhatsApp</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors flex items-center gap-2">
                      {lang === 'es' ? 'Enviar Mensaje Directo' : 'Send Direct Message'} <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">{lang === 'es' ? 'Teléfono' : 'Phone'}</p>
                    <p className="font-medium">+593 98 279 6756</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-bold uppercase tracking-wider">{lang === 'es' ? 'Ubicación' : 'Location'}</p>
                    <p className="font-medium">{lang === 'es' ? 'Ecuador' : 'Ecuador'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12 relative z-10">
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
            <h3 className="text-3xl font-bold mb-6">{t.contact.formTitle}</h3>
            <p className="text-muted-foreground mb-10 text-lg text-left">
              {t.contact.formDesc}
            </p>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-3 w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20" asChild>
                <a href="mailto:j.boderoc@gmail.com">
                  {t.contact.emailBtn} <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 gap-3 w-full h-16 rounded-2xl text-lg font-bold" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t.contact.whatsappBtn} <WhatsAppIcon className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">{t.contact.responseTime}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-2xl tracking-tight text-accent">JCB<span className="text-primary">.</span></span>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Julio Cesar Bodero Castro. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          </div>
          <div className="flex gap-10 font-medium text-slate-600">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
