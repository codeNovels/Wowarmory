import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'profile-component',
    templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
    @Input() items: Array<any>;

    constructor() { }

    ngOnInit() { }
}