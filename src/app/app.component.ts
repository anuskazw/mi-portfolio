import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  name = 'Ana María Caballero Gómez';
  currentYear = new Date().getFullYear();

  navItems = [
    { label: 'Inicio', href: '#hero', type: 'scroll' },
    { label: 'Sobre mí', href: '#about', type: 'scroll' },
    { label: 'Skills', href: '#skills', type: 'scroll' },
    { label: 'Experiencia', href: '#experience', type: 'scroll' },
    { label: 'Proyectos', href: '#projects', type: 'scroll' },
    { label: 'Contacto', href: '#contact', type: 'scroll' }
  ];

  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  navigate(item: { label: string; href: string; type: string }): void {
    this.closeMenu();
    if (item.type === 'route') {
      this.router.navigate([item.href]);
    } else {
      // If we're not on the home page, navigate there first
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => this.scrollTo(item.href), 100);
        });
      } else {
        this.scrollTo(item.href);
      }
    }
  }

  goHome(): void {
    this.closeMenu();
    this.router.navigate(['/']);
  }

  private scrollTo(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
