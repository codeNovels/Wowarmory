import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService{
    private searchUrl:string;
    private baseUrl: string = 'https://us.api.battle.net/wow/character/'
    private apiKey: string = 'apikey=4ae9q6w9g24dfage6zmjngax5xf7x4sb'

    constructor(private http: Http){

    }

    getItems(){
        this.searchUrl = 'https://us.api.battle.net/wow/character/darkspear/Bajheera?fields=items&locale=en_US&apikey=4ae9q6w9g24dfage6zmjngax5xf7x4sb'
        return this.http.get(this.searchUrl)
            .map(data => data.json());
    }

}