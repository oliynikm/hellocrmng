import { Component, OnInit } from '@angular/core';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    private items: MenuItem[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.items = [{
            label: 'manager',

            items: [{
                label: 'clients',
                icon: 'fa-users',
                routerLink: ['/manager/clients']
            },
            {
                label: 'emails',
                icon: 'fa-envelope-open-o',
                routerLink: ['/manager/mail']
            }/* ,
            {
                label: 'todo',
                icon: 'fa-check-square-o',
                routerLink: ['/manager/todo']
            } */]
        }];

        if (this.userService.isAdminUser()) {
            this.items = this.items.concat([{
                label: 'admin',
                routerLink: ['/admin'],
                expanded: true,
                items: [{
                    label: 'config',
                    icon: 'fa-config',
                    routerLink: ['/admin/config']
                }, {
                    label: 'logs',
                    icon: 'fa-log',
                    routerLink: ['/admin/log']
                }]
            }]);
        }

    }
}
