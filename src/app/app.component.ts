import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  role: string;

  constructor(
    public authService: AuthService
  ) {

  }

  async ngOnInit() {
    if (this.authService.user) {
      this.role = this.authService.user.role;
    }
  }
  hello(){
    console.log(this.role);
  }
  title = 'mini-neptun-frontend';
}
