import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  constructor(private menuController: MenuController,private router:Router) {}

  openTab(tabName: string) {
    this.menuController.close(); 
   
    if (tabName === 'inicio') {
      this.router.navigate(['/tabs/inicio']);
    } else if (tabName === 'carrito') {
      this.router.navigate(['/tabs/carrito']);
    } else if (tabName === 'cuenta') {
      this.router.navigate(['/tabs/cuenta']);
    }
  }
}
