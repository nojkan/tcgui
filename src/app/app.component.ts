import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuth,AuthProviders,AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent  {

	title = 'Tournois du TCG';

    constructor(public af: AngularFire, private auth: FirebaseAuth) {
    	this.af.auth.subscribe(auth => console.log(JSON.stringify(auth)));
      
    }

    login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect,
    });



    }

   /* overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
*/	
	logout() {
        this.af.auth.logout();
    }
}








