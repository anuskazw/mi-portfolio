import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements AfterViewInit {
  ngAfterViewInit() {
    const profileNames = document.querySelectorAll('.profile-name');
    
    profileNames.forEach(span => {
      const name = span.getAttribute('data-name');
      if (name) {
        let index = 0;
        span.addEventListener('mouseenter', function typeWriter() {
          if (index < name.length) {
            span.textContent += name.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
          }
        });
        
        span.addEventListener('mouseleave', function() {
          span.textContent = '';
          index = 0;
        });
      }
    });
  }
}
