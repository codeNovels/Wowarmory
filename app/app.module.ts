import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}     from "@angular/forms";
import { NavbarComponent }  from './navbar/navbar.component';
import { HeaderComponent }  from './header/header.component';
import { ProfileComponent }  from './profile/profile.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, ProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
