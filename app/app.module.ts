import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule}             from "@angular/forms";
import { NavbarComponent }        from './navbar/navbar.component';
import { HeaderComponent }        from './header/header.component';
import { ProfileComponent }       from './profile/profile.component';
import { SidebarComponent }       from './profile/sidebar/sidebar.component';
import { ContentComponent }       from './profile/content/content.component';
import { ContentTopComponent }    from './profile/content/content-top/content-top.component';
import { ContentBottomComponent } from './profile/content/content-bottom/content-bottom.component';
import { FooterComponent }        from './footer/footer.component';

import { AppComponent }           from './app.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  NavbarComponent, 
                  HeaderComponent, 
                  ProfileComponent, 
                  SidebarComponent, 
                  ContentComponent,
                  ContentTopComponent, 
                  ContentBottomComponent,
                  FooterComponent ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
