import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  /**
   * 
   * @param profileId 
   */
  getProfile(profileId) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(profileId, options)
    .map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json();
  }

}
