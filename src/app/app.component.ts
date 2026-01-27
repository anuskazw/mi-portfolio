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
  role = 'Frontend Developer';
  yearsExperience = 7;

  email = 'anuskazw@gmail.com';
  github = 'https://github.com/anuskazw';
  linkedin = 'https://www.linkedin.com/in/ana-m%C2%AA-caballero-8151b681';

  bio = `Desarrolladora Frontend con más de ${this.yearsExperience} años de experiencia en Angular, React,
  Stencil y NodeJS. Especializada en crear aplicaciones web escalables con TypeScript y RxJS.
  Conocimientos de backend con Java y Spring Boot, y bases de datos Oracle SQL, MySQL y MongoDB.
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
      role: 'Frontend Developer',
      company: 'NTT DATA',
      period: '2022 - 2023',
      description: 'Desarrollo frontend con Angular para clientes del sector energético y bancario. Análisis de tareas, orientación y buenas prácticas al equipo. Soporte técnico y funcional. Gestión de tareas con JIRA (SCRUM) y documentación en Confluence.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Git', 'JIRA']
    },
    {
      role: 'Frontend Developer',
      company: 'Proyectos Anteriores',
      period: '2017 - 2022',
      description: 'Desarrollo de aplicaciones web para empresas energéticas, telecomunicaciones, transporte ferroviario y banca. Trabajo con equipos de diferentes tamaños en proyectos de 6 meses a 1.5 años.',
      technologies: ['Angular', 'React', 'JavaScript', 'Oracle SQL', 'Redmine']
    },
    {
      role: 'Junior Developer',
      company: 'Inicio de Carrera',
      period: '2016 - 2017',
      description: 'Desarrollo de interfaces web responsivas. Integración con APIs REST. Control de versiones con Git y metodología Scrum.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap']
    }
  ];

  projects: Project[] = [
    {
      title: 'Plataforma Sector Energético',
      description: 'Aplicación web para gestión de servicios energéticos con dashboards interactivos y reportes en tiempo real.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Oracle SQL'],
      github: '#'
    },
    {
      title: 'Portal Banca Mayorista',
      description: 'Sistema de gestión bancaria con autenticación segura, operaciones financieras y reporting.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
      github: '#'
    },
    {
      title: 'App Transporte Ferroviario',
      description: 'Aplicación para gestión de rutas y horarios con integración de APIs externas y notificaciones.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
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
