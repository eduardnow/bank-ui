import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Holder } from '../models/Holder';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HolderService {

  constructor(private http: HttpClient) { }

  all(): Observable<Holder[]> {
    return this.http.get(environment.apiUrl + 'holders').pipe(
      map((data: any[]) => data.map((item: any) => new Holder(item))),
    );
  }

  get(id: number): Observable<Holder> {
    return this.http.get(environment.apiUrl + 'holders/' + id).pipe(
      map((data) => new Holder(data))
    );
  }

  create(holder) {
    const body = JSON.stringify(holder);

    return this.http.post(environment.apiUrl + 'holders', body, httpOptions);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl + 'holders/' + id);
  }
}
