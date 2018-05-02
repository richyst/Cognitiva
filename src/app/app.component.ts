import { Component } from '@angular/core';
import { CuestionarioService } from './services/cuestionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CuestionarioService]
})
export class AppComponent {
  title = 'app';
}
