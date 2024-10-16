import { Component } from '@angular/core';

@Component({
  selector: 'mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.scss']
})
export class MisProyectosComponent {
  
  paginaActual: string = 'json';

  cambiarPagina(pagina: string): void {
    this.paginaActual = pagina;
  }

  codigoJson: string = `{
      "proyectos": [
        {
          "nombre": "Portafolio Personal",
          "descripcion": "Sitio web para mostrar mis proyectos y habilidades",
          "tecnologias": ["Angular", "TypeScript", "SCSS"]
        },
        {
          "nombre": "Aplicación de Tareas",
          "descripcion": "App para gestionar tareas diarias",
          "tecnologias": ["React", "JavaScript", "CSS"]
        },
        {
          "nombre": "API de Gestión de Usuarios",
          "descripcion": "Backend para manejar autenticación y perfiles de usuario",
          "tecnologias": ["Node.js", "Express", "MongoDB"]
        }
      ]
    }`;

    codigoReact: string = `
import React from 'react';

const MiComponente = () => {
  const [contador, setContador] = React.useState(0);

  const incrementar = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <div>
      <h1>Mi Componente React</h1>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default MiComponente;
    `;

  

}
