import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ProfileService]
})
export class AppComponent {
    public realm: string;
    public character: string;
    public items: Array<any>;
    public profile: Array<any>;
    public race: string;
    public thumbnail: string;

    constructor(private profileService: ProfileService) {

    }

    searchCharacter() {
        this.getInventory();
    }

    ngOnInit() {
        /**
         * Load the initial data.
         */
        //this.getInventory();
    }

    getInventory() {
        this.profileService.getItems(this.realm, this.character)
            .subscribe(data => {
                this.items = data.items;
                this.profile = data;
                this.race = data.race
                this.thumbnail = data.thumbnail;
            })
    }
}
