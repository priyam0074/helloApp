import { Component, OnInit, ElementRef} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const rat: any = [
    { id:1,path: '/dashboard', title: 'Category',  icon: 'pe-7s-graph', class: '', child: [{name:'Soup', sn:'S'},{name:'Beverages', sn:'B'},{name:'Main Course', sn:'M'}] },
    { id:2,path: '/detail', title: 'Food Category',  icon:'pe-7s-user', class: '' },
    { id:3,path: '/heroes', title: 'Billing',  icon:'pe-7s-note2', class: '' },
     { id:3,path: '/sales', title: 'Sales',  icon:'pe-7s-note2', class: '' },
];
export const userInfos: any = [{
    id:1, userName:'Ramesh Kumar', icon: 'pe-7s-graph', class:'user-profile', child:[{name:'My Profile', sn:'MP'},{name:'Edit Profile', sn:'EP'},{name:'Setting', sn:'S'}]
}]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems: any[];
  userInfo: any[];
   private listTitles: any;
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;


  constructor(location: Location,  private element: ElementRef<HTMLElement>) {
      this.location = location;
          this.sidebarVisible = false;
    }
  ngOnInit() {
    this.menuItems = rat.filter(menuItem => menuItem);
    this.userInfo = userInfos.filter(user => user);
    this.listTitles = rat.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  title = 'hello-app';
  sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee : any = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.split('/').pop();
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path.split('/').pop() === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
