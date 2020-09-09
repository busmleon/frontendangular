import keycloak from './keycloak'
import { environment } from '../../environments/environment'

export class KeycloakService {
   static auth: any = {}

   /*
   **init() stellt die Verbindung zum Keycloak-Client auf dem entsprechendem Realm und Server
   */
   static init() {
      const keycloakAuth = keycloak(
         //  Muss beim ändern des Servers/Realms/Clients angepasst werden
         {
            url: environment.KEYCLOAK_URL, //  Die Server URL des Keycloaks
            realm: environment.KEYCLOAK_REALM, // Das zu nutzende Realm
            clientId: environment.KEYCLOAK_CLIENT, //  Der zu nutzende Client auf dem Realm
         }
      )

      KeycloakService.auth.loggedIn = false

      return new Promise((resolve, reject) => {
         keycloakAuth.init({ onLoad: 'login-required' })
            .then(() => {
               KeycloakService.auth.loggedIn = true
               KeycloakService.auth.authz = keycloakAuth
               KeycloakService.auth.logoutUrl = keycloakAuth.createLogoutUrl()
               resolve()
            })
            .catch(() => {
               reject()
            })
      })
   }

   /*
   **logout() leitet einen zu der Logout-Page weiter
   */
   static logout() {
      KeycloakService.auth.loggedIn = false
      KeycloakService.auth.authz = null

      window.location.href = KeycloakService.auth.logoutUrl
   }

   static refreshJWT() {
      return new Promise((resolve, reject) => {
         if (KeycloakService.auth.authz.token) {
            KeycloakService.auth.authz
               .updateToken(5)
               .then(() => {
                  resolve(KeycloakService.auth.authz.token)
               })
               .catch(() => {
                  reject('Failed to refresh token')
               })
         } else {
            reject('Not logged in')
         }
      })
   }
}
