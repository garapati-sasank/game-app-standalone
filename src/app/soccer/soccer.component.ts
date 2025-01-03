import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-soccer',
    imports: [RouterOutlet],
    templateUrl: './soccer.component.html',
    styleUrl: './soccer.component.css'
})
export class SoccerComponent {

  router = inject(Router)

  navigateTo(path: string) {
    this.router.navigate([`soccer/${path}`]);
  }

}
