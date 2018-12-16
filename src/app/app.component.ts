import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  constructor(
    public authService: AuthService
  ) {

  }
  
  show = this.authService.isLoggedIn();
  title = 'mini-neptun-frontend';
}
