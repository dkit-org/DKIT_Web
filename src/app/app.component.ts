import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DKIT_Web';


  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        items: [
          {label: 'Images', routerLink: 'dashboard/images'},
          {label: 'Container', routerLink: 'dashboard/containers'}
        ]
      },

      {label: 'Settings', routerLink: 'settings', icon: 'pi pi-cog'},
      {label: 'Profile', routerLink: 'profile', icon: 'pi pi-user'},

      {
        label: 'Help',
        icon: 'pi pi-info-circle',
        items: [
          {label: 'Getting Started', routerLink: 'help/getting-started' },
          {label: 'About', routerLink: 'help/about'}
        ]
      }
    ];
  }
}
