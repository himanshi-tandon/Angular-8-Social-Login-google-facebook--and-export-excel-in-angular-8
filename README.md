#install package

npm install --save angularx-social-login

#import in app module

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login"; 

#Write in app module

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);
 
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  
  
  
  -------------------------------------------------------------------------------------------------------- export excel ---------------
  
  
1)  Install XLSX Library Execute the following command to add the xlsx library to our application.
npm install xlsx --save
2)@ViewChild('epltable', { static: false }) epltable: ElementRef;
3) exportToExcel() {
  const ws: xlsx.WorkSheet =   
  xlsx.utils.table_to_sheet(this.epltable.nativeElement);
  const wb: xlsx.WorkBook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
  xlsx.writeFile(wb, 'epltable.xlsx');
 }


