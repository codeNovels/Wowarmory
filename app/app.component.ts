import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ProfileService]
})
export class AppComponent {
    realm: string;
    character: string;
    items: Array<any>;

    constructor(private profileService: ProfileService) {

    }

    ngOnInit() {
        /**
         * Load the initial data.
         */
        this.getInventory();
    }

    getInventory() {
        this.profileService.getItems()
            .subscribe(res => {
                this.items = res;
            })
    }
}
