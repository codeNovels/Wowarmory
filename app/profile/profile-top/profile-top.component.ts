import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import {Http, Headers, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile-top',
    templateUrl: 'profile-top.component.html',
    providers: [ProfileService]
})
export class ProfileTopComponent implements OnInit {
    @Input() items: Array<any>;
    template: any;
    slots: Array<any> = [{ id: 1, name: 'head' },
        { id: 2, name: 'neck' },
        { id: 3, name: 'shoulder' },
        { id: 16, name: 'back' },
        { id: 5, name: 'chest' },
        { id: 4, name: 'shirt' },
        { id: 19, name: 'tabard' },
        { id: 9, name: 'wrist' },
        { id: 10, name: 'legs' },
        { id: 6, name: 'waist' },
        { id: 7, name: 'hands' },
        { id: 8, name: 'feet' },
        { id: 11, name: 'finger1' },
        { id: 11, name: 'finger2' },
        { id: 12, name: 'trinket1' },
        { id: 12, name: 'trinket2' },
        { id: 21, name: 'mainHand' },
        { id: 22, name: 'offHand' }]

    constructor(private profileService: ProfileService,
        private jsonp: Jsonp,
        private http: Http) {

    }

    public getToolTip(item: any) {
        this.profileService.getItemDetails(item)
            .subscribe(res => {
                this.template = res;
            })
    }

    // public getToolTip(item: any) {
    //     let parser = new DOMParser();
    //     let url = 'http://us.battle.net/wow/en/item/138154/scenario-normal/tooltip?callback=JSONP_CALLBACK';
    //     this.jsonp.get(url)
    //               .map((res:any) =>  res = parser.parseFromString(res, 'text/html'))
    //               .subscribe(res => this.template = res);
    // }

    ngOnInit() { }
}