import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}     from "@angular/forms";
import { ProfileContent }  from './profile-contents/profile-content.component';
import { SummaryTop }  from './profile-contents/summary-top/summary-top.component';
import { AppComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProfileContent, SummaryTop ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
