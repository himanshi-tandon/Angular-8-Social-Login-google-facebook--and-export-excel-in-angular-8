import { Component } from '@angular/core';

import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: SocialUser;
  public authorized: boolean = false;
  


  constructor( private socialAuthService: AuthService ) {}
  
  public socialSignIn(socialPlatform : string) {  

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData        
        if (userData != null) {
               this.authorized = true;
               this.user = userData;               
            }       
      }
    );
  }

  public signOut(){
          this.socialAuthService.signOut();
          this.authorized = false;
      }
  
}

