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

  bio = `Desarrolladora Full Stack con más de ${this.yearsExperience} años de experiencia.
  Especializada en Frontend con Angular, React y TypeScript, con sólidos conocimientos de Backend
  en Java 17, Spring Boot y Node.js. Experiencia en bases de datos Oracle SQL, MySQL y MongoDB.
  Apasionada por aprender nuevas tecnologías y comprometida con la calidad del producto.`;

  highlights = [
    { icon: 'code', label: 'Años de experiencia', value: '7+' },
    { icon: 'folder', label: 'Proyectos', value: '10+' },
    { icon: 'tools', label: 'Tecnologías', value: '20+' },
    { icon: 'star', label: 'Frameworks', value: '5+' }
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 95, category: 'frontend' },
    { name: 'React', level: 80, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML5/CSS3/SCSS', level: 90, category: 'frontend' },
    { name: 'RxJS', level: 85, category: 'frontend' },
    { name: 'Stencil/WebComponents', level: 80, category: 'frontend' },
    { name: 'Bootstrap/Tailwind', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Java/Spring Boot', level: 70, category: 'backend' },
    { name: 'Oracle SQL/MySQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'Git/GitFlow', level: 90, category: 'tools' },
    { name: 'AWS (CodeCommit/Pipeline)', level: 70, category: 'tools' },
    { name: 'JIRA/Confluence', level: 90, category: 'tools' },
    { name: 'Jenkins/CI-CD', level: 70, category: 'tools' }
  ];

  experiences: Experience[] = [
    {
      role: 'Full Stack Developer',
      company: 'NTT DATA',
      period: '2022 - 2023',
      description: 'Desarrollo full stack para clientes del sector energético y bancario. Frontend con Angular y backend con Java 17 y Spring Boot. Creación de endpoints eficaces con consultas complejas a Oracle SQL. Orientación y buenas prácticas al equipo. Gestión con JIRA (SCRUM) y documentación en Confluence.',
      technologies: ['Angular', 'Java 17', 'Spring Boot', 'Oracle SQL', 'RxJS', 'Git']
    },
    {
      role: 'Full Stack Developer',
      company: 'Sector Telecomunicaciones',
      period: '2020 - 2022',
      description: 'Desarrollo de aplicaciones web completas para compañías telefónicas. Implementación de APIs REST con Node.js, integración con bases de datos MySQL y MongoDB. Frontend con React y Angular.',
      technologies: ['React', 'Node.js', 'MySQL', 'MongoDB', 'TypeScript', 'AWS']
    },
    {
      role: 'Frontend Developer',
      company: 'Sector Transporte y Banca',
      period: '2018 - 2020',
      description: 'Desarrollo frontend para empresas de transporte ferroviario y banca mayorista. Aplicaciones SPA con Angular, integración con APIs REST y WebSockets para datos en tiempo real.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'WebSockets', 'Bootstrap']
    },
    {
      role: 'Junior Developer',
      company: 'Inicio de Carrera',
      period: '2016 - 2018',
      description: 'Desarrollo de interfaces web responsivas. Integración con APIs REST. Primeros pasos con Java y bases de datos SQL. Control de versiones con Git y metodología Scrum.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Java', 'SQL', 'Git']
    }
  ];

  projects: Project[] = [
    {
      title: 'Plataforma Sector Energético',
      description: 'Aplicación full stack para gestión de servicios energéticos. Backend con Java 17 y Spring Boot, endpoints con consultas complejas a Oracle SQL. Frontend con Angular y dashboards en tiempo real.',
      technologies: ['Angular', 'Java 17', 'Spring Boot', 'Oracle SQL'],
      github: '#'
    },
    {
      title: 'Portal Banca Mayorista',
      description: 'Sistema de gestión bancaria completo con autenticación segura, APIs REST, operaciones financieras y reporting. Arquitectura full stack con microservicios.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'JWT'],
      github: '#'
    },
    {
      title: 'App Transporte Ferroviario',
      description: 'Aplicación full stack para gestión de rutas y horarios. Backend con Node.js y MongoDB, frontend con React. WebSockets para actualizaciones en tiempo real.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      github: '#'
    },
    {
      title: 'Sistema Telecomunicaciones',
      description: 'Plataforma de gestión de clientes y servicios para compañía telefónica. APIs REST con Node.js, base de datos MySQL y frontend con Angular.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'AWS', 'TypeScript'],
      github: '#'
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
