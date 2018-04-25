import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Home} from '../modals/home.interface';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  getHomes() {
    return this.http.get<Array<Home>>('/resources/homes.json');
  }

}
