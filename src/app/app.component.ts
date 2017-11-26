import { Component } from '@angular/core';
import { ConsultantsService } from './shared/api/consultants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private consultantService: ConsultantsService) {}
}
