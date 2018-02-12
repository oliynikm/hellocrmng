import { Component, OnInit } from '@angular/core';
import {PanelMenuModule,MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

   private items: MenuItem[];

    ngOnInit() {
        this.items = [{ 
                label:'manager',

                items:[ {label:'dashboard',
                routerLink:['/manager']
            },{
                    label: 'clients',
                    icon:'fa-user-o',
                    routerLink:['/manager/clients']
                },{
                label: 'emails',
                icon:'fa-envelope-o',
                routerLink:['/manager/mail']
            },] 
        
        }, { 
            label:'admin',
            routerLink:['/admin'],
            expanded:true,
            items:[ {
                label: 'clients',
                icon:'fa-user-o',
                routerLink:['/manager/clients']
            },{
            label: 'emails',
            icon:'fa-envelope-o',
            routerLink:['/manager/mail']
        }] 
    
    }
        ];
    }
}
