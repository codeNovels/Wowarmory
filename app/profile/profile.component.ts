import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'profile-component',
    templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
    @Input() items: Array<any>;
    @Input() profile: Array<any>;
    @Input() race: any;
    @Input() thumbnail: any;
    
    backgroundImageStyle: any;

    


    constructor(private sanitationService:DomSanitizer) { 
        this.backgroundImageStyle = sanitationService.bypassSecurityTrustStyle('url(' + this.photo + ')');
    }

    photo: string = 'http://us.battle.net/wow/static/images/character/summary/backgrounds/race/'+ this.race +'.jpg'

    ngOnInit() { }
}