import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tw } from '../../models/tw';

@Injectable({
  providedIn: 'root'
})
export class TwService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient
    ) { }
    private url = 'http://127.0.0.1:3000';

  getTws(): Observable<Tw[]> {
    return this.http.get<Tw[]>(this.url+"/tw");
  }

  saveTw(tw: Tw): Observable<Tw> {
    return this.http.post<Tw>(this.url+"/tw", tw, this.httpOptions);
  }

  updateTw(tw: Tw): Observable<Tw> {
    return this.http.put<Tw>(this.url+"/tw/"+tw.id, tw, this.httpOptions);
  }

  deleteTw(tw: Tw | number): Observable<Tw> {
    const id = typeof tw === 'number' ? tw : tw.id;
    const deleteUrl = `${this.url}/tw/${id}`;
  
    return this.http.delete<Tw>(deleteUrl, this.httpOptions);
  }

  getTw(tw: Tw | number): Observable<Tw> {
    const id = typeof tw === 'number' ? tw : tw.id;
    const getUrl = `${this.url}/tw/${id}`;
    return this.http.get<Tw>(getUrl);
  }

  /** Version php */
  private urlPHP = 'http://127.0.0.1/FamilyTwit/api-php';

  getPHPTws(): Observable<Tw[]> {
    return this.http.get<Tw[]>(this.urlPHP+"/tw.php");
  }

  postPHPTw(tw: Tw): Observable<Tw> {
    const formData = new FormData();
    formData.append('message', tw.message);
    formData.append('user_id', ""+tw.user_id);
    return this.http.post<Tw>(this.urlPHP+"/tw_insert.php", formData)
  }
}
