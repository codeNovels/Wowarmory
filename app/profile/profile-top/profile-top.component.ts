import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'profile-top',
    templateUrl: 'profile-top.component.html'
})
export class ProfileTopComponent implements OnInit {
    @Input() items: Array<any>;
    slots: Array<any> = [{id: 1, name: 'head'},
                         {id: 2, name: 'neck'},
                         {id: 3, name: 'shoulder'},
                         {id: 16, name: 'back'},
                         {id: 5, name: 'chest'},
                         {id: 4, name: 'shirt'},
                         {id: 19, name: 'tabard'},
                         {id: 9, name: 'wrist'},
                         {id: 10, name: 'legs'},
                         {id: 6, name: 'waist'},
                         {id: 7, name: 'hands'},
                         {id: 8, name: 'feet'},
                         {id: 11, name: 'finger1'},
                         {id: 11, name: 'finger2'},
                         {id: 12, name: 'trinket1'},
                         {id: 12, name: 'trinket2'},
                         {id: 21, name: 'mainHand'},
                         {id: 22, name: 'offHand'}]

    constructor() { }

    ngOnInit() { }
}