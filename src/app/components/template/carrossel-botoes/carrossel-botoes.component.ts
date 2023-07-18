import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel-botoes',
  templateUrl: './carrossel-botoes.component.html',
  styleUrls: ['./carrossel-botoes.component.scss']
})
export class CarrosselBotoesComponent {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.centerThirdButton();
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
  
  private centerThirdButton() {
    const carouselContainer = this.elementRef.nativeElement.querySelector('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    const thirdButton = carouselItems[2] as HTMLElement;

    carousel.scrollTo({
      left: thirdButton.offsetLeft - (carouselContainer.offsetWidth - thirdButton.offsetWidth) / 2,
      behavior: 'smooth'
    });
  }

  
}
