import { Component } from '@angular/core';
import { ProfileContent } from './profile-contents/profile-content.component'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: ProfileContent
})
export class AppComponent { }
