import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../core/services/spinner.service';
import { NgprimeModule } from '../../primeng/ngprime/ngprime.module';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgprimeModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  private readonly spinnerSvc = inject(SpinnerService);
  isloading = this.spinnerSvc.isLoading;
}
