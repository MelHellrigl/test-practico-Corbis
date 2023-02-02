import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableResponse } from '../models/req-resp';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private url: string =
    'https://raw.githubusercontent.com/pyorlano/cst-frontend-test/master/db.json';

  constructor(private http: HttpClient) {}

  getApi() {
    return this.http.get<TableResponse>(this.url);
  }
}
