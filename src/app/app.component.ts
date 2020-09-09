import { Component } from '@angular/core';
import { KeycloakService } from './keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularWeb';

  constructor(){}

  logoutPerService(){
    KeycloakService.logout();
  }

}
