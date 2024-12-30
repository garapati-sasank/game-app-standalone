import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RugbyService {
  constructor() { }
  http = inject(HttpClient);

  getAllData(): Observable<any[]>{
    return this.http.get<any[]>('https://api.openbrewerydb.org/breweries');
  }
}
