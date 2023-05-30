import { Component } from '@angular/core';

@Component({
  selector: 'presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent {
  descripcion = `¡Llevo 6 años trabajando como frontender!`

  cards = [
    {
      image: {
        src: 'assets/images/post.jpg',
        alt: 'tarjetita'
      },
      descripcion: 'Descripcion de la tarjetita'
    },
    {
      image: {
        src: 'assets/images/post.jpg',
        alt: 'tarjetita'
      },
      descripcion: 'Descripcion de la tarjetita'
    },
    {
      image: {
        src: 'assets/images/post.jpg',
        alt: 'tarjetita'
      },
      descripcion: 'Descripcion de la tarjetita'
    },
    {
      image: {
        src: 'assets/images/post.jpg',
        alt: 'tarjetita'
      },
      descripcion: 'Descripcion de la tarjetita'
    }
  ]
}
