
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private http: HttpClient) {}
  // http = inject(HttpClient);
logicForCarData$(): Observable<any> {
    return this.http.get<any>(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json'
    );
  }
  }