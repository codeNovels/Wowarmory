import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
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
    tooltip: any;
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
                private sanitationService:DomSanitizer) {

    }

    public getToolTip(item: any) {
        this.profileService.getItemDetails(item)
            .subscribe(res => {
                this.tooltip = res;
                this.template = this.tooltip._body

                this.template = this.template.replace("icon-frame", "")
                
               // this.template = this.template.repalce("style=\"background-image\",\"[style.background-image]=")


                this.sanitationService.bypassSecurityTrustHtml(this.template);
            })
    }

    ngOnInit() { }
}