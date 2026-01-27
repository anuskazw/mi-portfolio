import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  name = 'Ana María Caballero Gómez';
  role = 'Full Stack Developer';
  yearsExperience = 7;

  email = 'anuskazw@gmail.com';
  github = 'https://github.com/anuskazw';
  linkedin = 'https://www.linkedin.com/in/ana-m%C2%AA-caballero-8151b681';

  bio = `Desarrolladora Full Stack con más de ${this.yearsExperience} años de experiencia, especializada
  principalmente en Frontend. Dominio avanzado de Angular, React y JavaScript (desde ES3 hasta las últimas
  versiones). Conocimientos sólidos de Backend con Java, Spring Boot y Node.js. Experiencia en tiempo real
  con WebSockets y Server Sent Events. Actualmente explorando desarrollo con IA (Cursor, Claude Code, MCPs).`;

  highlights = [
    { icon: 'code', label: 'Años de experiencia', value: '7+' },
    { icon: 'folder', label: 'Proyectos', value: '10+' },
    { icon: 'tools', label: 'Tecnologías', value: '20+' },
    { icon: 'star', label: 'Clientes enterprise', value: '6+' }
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 95, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'JavaScript (ES3-ES2024)', level: 95, category: 'frontend' },
    { name: 'HTML5/CSS3/SCSS', level: 90, category: 'frontend' },
    { name: 'RxJS', level: 85, category: 'frontend' },
    { name: 'WebSockets/SSE', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Java/Spring Boot', level: 70, category: 'backend' },
    { name: 'Oracle SQL/MySQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'Git/GitFlow', level: 90, category: 'tools' },
    { name: 'JIRA/Confluence', level: 90, category: 'tools' },
    { name: 'IA (Cursor/Claude Code)', level: 75, category: 'tools' },
    { name: 'AWS/CI-CD', level: 70, category: 'tools' }
  ];

  experiences: Experience[] = [
    {
      role: 'Frontend Developer',
      company: 'Vitaly - Preving Investments Group',
      period: '2025 - Actualidad',
      description: 'Desarrollo interno en el equipo de Vitaly. Migraciones de pantallas antiguas, resolución de incidencias en caliente y optimización del rendimiento para una plataforma con alta carga de planificadores de citas médicas. Últimos 6 meses trabajando con MCPs y desarrollo asistido por IA (Cursor, Claude Code, v0).',
      technologies: ['Angular 14', 'TypeScript', 'RxJS', 'IA/MCPs', 'Cursor']
    },
    {
      role: 'Frontend Developer',
      company: 'BETWEEN TECHNOLOGY → Vitaly/Preving',
      period: '2023 - 2025',
      description: 'Externa para el cliente Vitaly de Preving Investments Group durante 1.5 años. Desarrollo de pantallas nuevas con Angular 14 y migraciones de pantallas antiguas al nuevo framework.',
      technologies: ['Angular 14', 'TypeScript', 'SCSS', 'Git', 'JIRA']
    },
    {
      role: 'Junior → Engineer Developer',
      company: 'NTT DATA',
      period: '2017 - 2023',
      description: 'Crecimiento profesional de Junior a Engineer Developer trabajando con grandes clientes: Repsol (TPV datáfonos), Banca Santander (altas de clientes), Orange/Amena (proyecto complejo de telecomunicaciones), VECI - Viajes El Corte Inglés (intranet con gestión de roles), y Renfe (aplicación de compra de billetes).',
      technologies: ['Angular', 'React', 'JavaScript', 'Java', 'Oracle SQL', 'WebSockets']
    }
  ];

  projects: Project[] = [
    {
      title: 'App Renfe - Compra de Billetes',
      description: 'Desarrollo del flujo de compra de billetes y gestión de tipos de billetes para la aplicación móvil de Renfe. Interfaz de usuario completa para el proceso de reserva y pago.',
      technologies: ['React', 'TypeScript', 'API REST'],
      link: 'https://www.docomobility.com/app'
    },
    {
      title: 'Intranet VECI - Viajes El Corte Inglés',
      description: 'Desarrollo de intranet corporativa con alta complejidad de gestión de roles y permisos. Sistema para limitar o permitir funcionalidades según el perfil del usuario.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS']
    },
    {
      title: 'TPV Datáfonos - Repsol',
      description: 'Desarrollo de TPV para datáfonos en JavaScript vanilla (ES3), consolidando bases sólidas de JS. En paralelo, desarrollo del frontend Angular para monitores PC. Implementación de tiempo real con Server Sent Events y WebSockets para cobro de gasolinas.',
      technologies: ['JavaScript ES3', 'Angular', 'WebSockets', 'SSE']
    },
    {
      title: 'Portal Banca Santander',
      description: 'Trabajo en grandes equipos desarrollando el flujo de altas de clientes que quieren abrir una cuenta con ofertas promocionales.',
      technologies: ['Angular', 'TypeScript', 'Java', 'Oracle SQL']
    },
    {
      title: 'Plataforma Orange/Amena',
      description: 'Proyecto complejo de telecomunicaciones para la gestión de servicios y clientes de la operadora.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'API REST']
    }
  ];

  navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' }
  ];

  menuOpen = false;
  activeSection = 'hero';
  currentYear = new Date().getFullYear();

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(s => s.category === category);
  }

  scrollToSection(href: string): void {
    this.closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
