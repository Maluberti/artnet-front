import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carrossel-botoes',
  templateUrl: './carrossel-botoes.component.html',
  styleUrls: ['./carrossel-botoes.component.scss']
})
export class CarrosselBotoesComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const carouselContainer = this.elementRef.nativeElement.querySelector('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');

    const centerItemIndex = Math.floor(carouselItems.length / 2);
    const centerItem = carouselItems[centerItemIndex] as HTMLElement;

    carousel.scrollTo({
      left: centerItem.offsetLeft - (carouselContainer.offsetWidth - centerItem.offsetWidth) / 2,
      behavior: 'smooth'
    });
  }

  moveCarousel(direction: string) {
    const carouselContainer = this.elementRef.nativeElement.querySelector('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    const firstItem = carouselItems[0] as HTMLElement;
    const lastItem = carouselItems[carouselItems.length - 1] as HTMLElement;

    if (direction === 'left') {
      carousel.prepend(lastItem);
      carousel.scrollBy({
        left: -firstItem.offsetWidth,
        behavior: 'smooth'
      });
    } else if (direction === 'right') {
      carousel.append(firstItem);
      carousel.scrollBy({
        left: firstItem.offsetWidth,
        behavior: 'smooth'
      });
    }
  }
}