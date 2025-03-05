import { Component, signal } from '@angular/core';
import { CarService } from '../car.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tennis',
    imports: [NgFor],
    templateUrl: './tennis.component.html',
    styleUrl: './tennis.component.css'
})
export class TennisComponent {

    carInfo = signal([]);
    vehicheApiErrorInfo = null;
    isLoading = false;
  
    // carServices = inject(CarService);
  
    constructor(private carServices: CarService) {
    }
  
    ngOnInit(): void {
      //  this.getCarData();
    }
  
    getCarData(): void {
      this.isLoading = true;
      this.vehicheApiErrorInfo = null;
      this.carServices.logicForCarData$().subscribe(
        (response: any) => {
          this.isLoading = false;
          console.log(response);
          this.carInfo.set(response);
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
          this.vehicheApiErrorInfo = {
            isError: true,
            message: "This is not avaliable now. Please try again later."
          }
        }
      );
    }

}
