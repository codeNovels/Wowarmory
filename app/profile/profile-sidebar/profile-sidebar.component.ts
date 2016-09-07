import { Component, OnInit, Input } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'profile-sidebar',
    templateUrl: 'profile-sidebar.component.html'
})
export class ProfileSidebarComponent implements OnInit {
    @Input() profile: Array<any>;

    classes: Array<any>=[
        {id: 1, name:'Warrior'},
        {id: 2, name:'Paladin'},
        {id: 3, name:'Hunter'},
        {id: 4, name:'Rogue'},
        {id: 5, name:'Priest'},
        {id: 6, name:'Death Knight'},
        {id: 7, name:'Shaman'},
        {id: 8, name:'Mage'},
        {id: 9, name:'Warlock'},
        {id: 10, name:'Monk'},
        {id: 11, name:'Druid'},
        {id: 12, name:'Demon Hunter'},
    ]

    races: Array<any>=[
        {id: 1, name:'Human'},
        {id: 2, name:'Orc'},
        {id: 3, name:'Dwarf'},
        {id: 4, name:'Night Elf'},
        {id: 5, name:'Undead'},
        {id: 6, name:'Tauren'},
        {id: 7, name:'Gnome'},
        {id: 8, name:'Troll'},
        {id: 9, name:'Goblin'}, 
        {id: 10, name:'Blood Elf'},
        {id: 11, name:'Draenei'},
        {id: 22, name:'Worgen'},
        {id: 25, name:'Panda'},
    ]

    menus: Array<any>=[
        'Auctions',
        'Events',
        'Achievements',
        'Challenge Mode',
        'Pets and Mounts',
        'Professions',
        'Reputation',
        'PvP',
        'Activity Feed',
        'Guild',
    ]

    
    constructor() { }


    ngOnInit() { }
}