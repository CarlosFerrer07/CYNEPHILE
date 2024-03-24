import { Component } from '@angular/core';
import { Banner } from '../../interfaces/media.interface';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  //guardamos datos del banner

  public dataBanner: Banner[] = [
    {
      src: '../../../assets/img/banner1.png',
      title: 'WALLE',
      description: 'Tras cientos de años haciendo aquello para lo que fue construido: limpiar el planeta de basura, el pequeño robot Wall-e tiene una nueva misión cuando conoce a Eva.',
      active: 'carousel-item active'
    },
    {
      src: '../../../assets/img/banner2.png',
      title: 'TOY STORY',
      description: 'Los juguetes de Andy, un niño de seis años, temen que un nuevo regalo les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito, trata de tranquilizarlos hasta que aparece Buzz Lightyear.',
      active: 'carousel-item'
    },
    {
      src: '../../../assets/img/banner3.png',
      title: 'BUSCANDO A NEMO',
      description: 'Nemo, un pequeño pececillo, muy querido y protegido por su padre, se pierde fuera de la gran barrera del arrecife australiano, después de ser capturado por este arrecife, Nemo terminará en una pecera en Sidney.',
      active: 'carousel-item'
    }
  ] 
}
