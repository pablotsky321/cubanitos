import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController,private router:Router) {}

  openTab(tabName: string) {
    this.menuController.close(); 
   
    if (tabName === 'inicio') {
      this.router.navigate(['/inicio']);
    } else if (tabName === 'carrito') {
      this.router.navigate(['/carrito']);
    } else if (tabName === 'cuenta') {
      this.router.navigate(['/cuenta']);
    }
  }
}
