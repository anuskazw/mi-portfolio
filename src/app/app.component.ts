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
  // === PERSONALIZA TUS DATOS AQUI ===

  name = 'Tu Nombre';
  role = 'Frontend Lead Developer';
  yearsExperience = 8;

  email = 'tu@email.com';
  github = 'https://github.com/tu-usuario';
  linkedin = 'https://linkedin.com/in/tu-usuario';

  bio = `Desarrollador Frontend Lead con más de ${this.yearsExperience} años de experiencia
  creando aplicaciones web escalables y de alto rendimiento. Especializado en Angular y React,
  con sólidos conocimientos en arquitectura de software y liderazgo técnico de equipos.`;

  highlights = [
    { icon: 'code', label: 'Líneas de código', value: '500K+' },
    { icon: 'folder', label: 'Proyectos', value: '50+' },
    { icon: 'users', label: 'Equipos liderados', value: '10+' },
    { icon: 'coffee', label: 'Cafés', value: '∞' }
  ];

  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 95, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML/CSS/SCSS', level: 90, category: 'frontend' },
    { name: 'RxJS', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Python', level: 70, category: 'backend' },
    { name: 'Java', level: 65, category: 'backend' },
    { name: 'SQL/NoSQL', level: 75, category: 'backend' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'CI/CD', level: 75, category: 'tools' },
    { name: 'AWS/Azure', level: 65, category: 'tools' }
  ];

  experiences: Experience[] = [
    {
      role: 'Frontend Lead Developer',
      company: 'Empresa Actual',
      period: '2021 - Presente',
      description: 'Liderazgo técnico de un equipo de 8 desarrolladores. Arquitectura de aplicaciones Angular enterprise. Implementación de mejores prácticas y estándares de código.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Jest']
    },
    {
      role: 'Senior Frontend Developer',
      company: 'Empresa Anterior',
      period: '2018 - 2021',
      description: 'Desarrollo de aplicaciones SPA complejas. Migración de AngularJS a Angular. Mentoring de desarrolladores junior.',
      technologies: ['Angular', 'React', 'TypeScript', 'Node.js']
    },
    {
      role: 'Frontend Developer',
      company: 'Primera Empresa',
      period: '2016 - 2018',
      description: 'Desarrollo de interfaces de usuario responsivas. Integración con APIs REST. Optimización de rendimiento.',
      technologies: ['JavaScript', 'AngularJS', 'jQuery', 'Bootstrap']
    }
  ];

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico con más de 100K usuarios activos. Arquitectura micro-frontends.',
      technologies: ['Angular', 'NgRx', 'Node.js', 'MongoDB'],
      github: '#',
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de análisis en tiempo real con visualizaciones interactivas y reportes personalizados.',
      technologies: ['React', 'D3.js', 'TypeScript', 'GraphQL'],
      github: '#'
    },
    {
      title: 'Design System',
      description: 'Sistema de diseño completo con más de 50 componentes reutilizables y documentación Storybook.',
      technologies: ['Angular', 'SCSS', 'Storybook', 'Jest'],
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
