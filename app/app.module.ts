import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { AppComponent }           from './app.component';
import { FormsModule}             from "@angular/forms";
import { HttpModule }             from '@angular/http';

import { NavbarComponent }        from './navbar/navbar.component';
import { HeaderComponent }        from './header/header.component';
import { ProfileComponent }       from './profile/profile.component';
import { ProfileSidebarComponent }from './profile/profile-sidebar/profile-sidebar.component';
import { ProfileTopComponent }    from './profile/profile-top/profile-top.component';
import { ProfileBottomComponent } from './profile/profile-bottom/profile-bottom.component';
import { FooterComponent }        from './footer/footer.component';
import { ProfileService }         from './services/profile.service';




@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  HeaderComponent, 
                  ProfileComponent, 
                  ProfileSidebarComponent, 
                  ProfileTopComponent, 
                  ProfileBottomComponent,
                  FooterComponent ],

  bootstrap: [ AppComponent ],
  providers: [ProfileService]
})
export class AppModule { }
