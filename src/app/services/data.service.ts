import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../model/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private mock_api = "https://62ea4d523a5f1572e8789943.mockapi.io/data"

  getData():Observable<Data[]> {
    return this.http.get<Data[]>(`${this.mock_api}/data`);
  }

  getDataById(id: string):Observable<Data> {
    return this.http.get<Data>(`${this.mock_api}/data/${id}`);
  }
}
