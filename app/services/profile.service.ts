import {Injectable} from '@angular/core';
import {Http, Headers, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
    private searchUrl: string;
    private baseUrl: string = 'https://us.api.battle.net/wow/character/'
    private apiKey: string = 'apikey=4ae9q6w9g24dfage6zmjngax5xf7x4sb'

    constructor(private http: Http,
        private jsonp: Jsonp) {
    }

    getItems(realm:string, character: string) {
        this.searchUrl = 'https://us.api.battle.net/wow/character/'+realm+'/'+character+'?fields=items&locale=en_US&apikey=4ae9q6w9g24dfage6zmjngax5xf7x4sb'
        return this.http.get(this.searchUrl)
            .map(data => data.json());
    }

    getItemDetails(item:any) {
        var url = 'http://us.battle.net/wow/en/item/'+item.id+'/scenario-normal/tooltip';
        return this.http.get(url)
            .map(data => data);
    }

    getSidebarDetails() {
        this.searchUrl = 'https://us.api.battle.net/wow/character/darkspear/Bajheera?apikey=4ae9q6w9g24dfage6zmjngax5xf7x4sb'
        return this.http.get(this.searchUrl)
            .map(data => data.json());
    }

}
