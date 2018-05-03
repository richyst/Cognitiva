import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CuestionarioService {
  url = 'http://ec2-18-217-192-105.us-east-2.compute.amazonaws.com:5000/';
  constructor(private _http: Http) { }

  enviar(body) {
    const headers = new Headers({});
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.url, body)
      .map((response: Response) => {
        return response.json();
      });
  }
}
