import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ProfileService]
})
export class AppComponent {
    public realm: string = 'Akama';
    public character: string = 'Twins';
    public items: Array<any>;
    public profile: Array<any>;

    constructor(private profileService: ProfileService) {

    }

    searchCharacter() {
        this.getInventory();
    }

    ngOnInit() {
        this.getInventory();
    }

    getInventory() {
        this.profileService.getItems(this.realm, this.character)
            .subscribe(data => {
                this.items = data.items;
                this.profile = data;
                this.realm = '';
                this.character = '';
            })
    }
}
