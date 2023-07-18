import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel-botoes',
  templateUrl: './carrossel-botoes.component.html',
  styleUrls: ['./carrossel-botoes.component.scss']
})
export class CarrosselBotoesComponent {
  constructor(private elementRef: ElementRef) {}

  i = 0;
  

  ngOnInit() {
    this.centerButton(2);
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
    } 
    else if (direction === 'right') {
      if (this.i !== 0){
        carousel.append(firstItem)
      }
      carousel.scrollBy({
        left: firstItem.offsetWidth,
        behavior: 'smooth'
      });
      this.i = this.i + 1;
    }
  }

  j=0;

  centerButton(buttonNum: any) {
    const carouselContainer = this.elementRef.nativeElement.querySelector('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
    const firstItem = carouselItems[0] as HTMLElement;
    const widthButton = firstItem.offsetWidth;
    const clikedButton = carouselItems[buttonNum] as HTMLElement;
  

    if (this.j > 1){
      carousel.append(firstItem)
    }
    carousel.scrollBy({
      left: clikedButton.offsetLeft - (carouselContainer.offsetWidth/2 - widthButton/2) - 87,   //offsetleft nao atualiza depois de clicar em um botao
      behavior: 'smooth'
    });
    this.j = this.j + 1;
  }

  
}
