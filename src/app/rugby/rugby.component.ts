import { Component, inject } from '@angular/core';
import { RugbyService } from './rugby.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rugby',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rugby.component.html',
  styleUrl: './rugby.component.css'
})
export class RugbyComponent {

  rugbyServices = inject(RugbyService)

  allData: any;

  constructor() {
    this.getData()
  }

  getData() {
    this.rugbyServices.getAllData().subscribe(
      (response: any[]) => {
        console.log(response[0])
        this.allData=response
      },
      (error) => {
        console.log(error)
      }
    );
  }
}

