import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GenericHttpService {
  constructor(private http: Http) {}

  /**
   * Used to create generic get request.
   * @param {string} url Source url.
   * @param {RequestOptions} options Object with request options.
   * @returns {Observable} Observable of response object.
   * @memberOf GenericHttpService
   */
  public get (url: string, options?: RequestOptions): Observable<Object> {
    return this.http.get(url, options)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error.json().error ||
            'Server error');
      });
  }

  /**
   * Used to create generic post request.
   * @param {string} url Source url.
   * @param {any} body Payload.
   * @param {RequestOptions} options Object with request options.
   * @returns {Observable} Observable of response object.
   * @memberOf GenericHttpService
   */
  public post(url: string, body: any, options?: RequestOptions):
      Observable<Object> {
    return this.http.post(url, JSON.stringify(body), options)
      .map((res: Response) => res.json())
      .catch((error: any) => {
        return Observable.throw(error.json().error ||
          'Server error');
      });
  }
}
