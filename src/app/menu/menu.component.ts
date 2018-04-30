import { Component, OnInit } from '@angular/core';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

    items: MenuItem[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.items = [{
            label: 'Manager Area',

            items: [{
                label: 'Clients',
                icon: 'fa-users',
                routerLink: ['/manager/clients']
            },
            {
                label: 'Emails',
                icon: 'fa-envelope-open-o',
                routerLink: ['/manager/emails']
            }]
        }];

        if (this.userService.isAdminUser()) {
            this.items = this.items.concat([{
                label: 'Admin Area',

                items: [{
                    label: 'Configuration',
                    icon: 'fa-config',
                    routerLink: ['/admin/config']
                }, {
                    label: 'Logs',
                    icon: 'fa-log',
                    routerLink: ['/admin/log']
                }]
            }]);
        }

    }
}
