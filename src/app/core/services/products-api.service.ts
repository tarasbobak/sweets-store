import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class ProductsApiService {
  constructor(private http: Http) {
    getAccessToken().then(function(data: any) {
      http.get('https://api.molt.in/v1/products', {
        headers : new Headers({
          "Authorization" : "Bearer " + JSON.parse(data).access_token
        })
      })
        .map((res: Response) => res.json())
        .subscribe((data) => console.log(data));
    });
  }
}

function getAccessToken(){
    var creds = "client_id=" + 'hRNbvZF2gqmgBZE05MZKpLZ6eUXJG9pnvBQ5zQIo7C' +  "&grant_type=implicit";
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://api.molt.in/oauth/access_token?');

        request.onload = function() {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = function() {
            reject(Error('Error fetching data.'));
        };
        request.send(creds); //send the request
    });
}