import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent{

  router=inject(Router)

   navigateTo(path: string) {
    this.router.navigate([path]);
   }

}