import { Component} from '@angular/core';

@Component({
  selector: 'app-carrossel-botoes',
  templateUrl: './carrossel-botoes.component.html',
  styleUrls: ['./carrossel-botoes.component.scss']
})
export class CarrosselBotoesComponent {
  moveCarousel(direction: string) {
    const carousel = document.querySelector('.carousel') as HTMLElement;

    if (direction === 'left') {
      carousel.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
    } else if (direction === 'right') {
      carousel.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
    }
  }
}