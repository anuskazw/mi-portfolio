import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-instagram',
  templateUrl: './post-instagram.component.html',
  styleUrls: ['./post-instagram.component.scss']
})
export class PostInstagramComponent {

  @Input() imagen: { src: string, alt: string } = { src: `assets/images/post.png`, alt: 'imagen_1' };
  @Input() descripcion: string = 'lalala';

}
