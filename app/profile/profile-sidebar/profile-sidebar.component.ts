import { Component, OnInit, Input } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'profile-sidebar',
    templateUrl: 'profile-sidebar.component.html'
})
export class ProfileSidebarComponent implements OnInit {
    @Input() profile: Array<any>;

    
    constructor() { }


    ngOnInit() { }
}