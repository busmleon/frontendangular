import { Injectable } from '@angular/core';
import * as Keycloak from './keycloak.js';


//declare let Keycloak: any;

@Injectable()
export class KeycloakService {

   static auth: any = {};

   /*
   **init() stellt die Verbindung zum Keycloak-Client auf dem entsprechendem Realm und Server
   */
   static init(): Promise<any> {
      const keycloakAuth: any = Keycloak(
      //Muss beim ändern des Servers/Realms/Clients angepasst werden
      {
         url: 'http://localhost:8080/auth/', //Die Server URL des Keycloaks
         realm: 'Test_Realm', //Das zu nutzende Realm
         clientId: 'Test_Client' //Der zu nutzende Client auf dem Realm
      }
    );
 
    KeycloakService.auth.loggedIn = false;
 
    return new Promise((resolve, reject) => {
       keycloakAuth.init({onLoad: 'login-required'})
          .success(() => {
             console.log(keycloakAuth);
             KeycloakService.auth.loggedIn = true;
             KeycloakService.auth.authz = keycloakAuth;
             KeycloakService.auth.logoutUrl = keycloakAuth.createLogoutUrl();
             resolve();
          })
          .error(() => {
             reject();
          });
    });
 }

 /*
 **logout() leitet einen zu der Logout-Page weiter
 */
 static logout() {
    console.log('**  LOGOUT');
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;
 
    window.location.href = KeycloakService.auth.logoutUrl;
 }

 static getToken(): Promise<any> {
    return new Promise((resolve, reject) => {
       if (KeycloakService.auth.authz.token) {
          KeycloakService.auth.authz
             .updateToken(5)
             .success(() => {
                resolve(KeycloakService.auth.authz.token);
             })
             .error(() => {
                reject('Failed to refresh token');
             });
       } else {
          reject('Not logged in');
       }
    });
 }

//  static getUsername(): string {
//     return KeycloakService.auth.authz.tokenParsed.preferred_username;
//  }
 
//  static getFullName(): string {
//     return KeycloakService.auth.authz.tokenParsed.name;
//  }

}