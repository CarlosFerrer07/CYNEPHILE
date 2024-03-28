import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../core/services/media.service';
import { Movies, Serie } from '../../interfaces/media.interface';
import { BannerComponent } from '../../components/banner/banner.component';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent,NgprimeModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  ngOnInit(): void {
    
  }

}

