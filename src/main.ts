import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { appConfig } from './app/core/config';

if (environment.production) {
  enableProdMode();
}

getAccessToken().then(function(accessToken) {
  localStorage.setItem(appConfig.lSAccessTokenLabel, accessToken);

  platformBrowserDynamic().bootstrapModule(AppModule);
}, function(error) {
  console.log(error);
});

function getAccessToken(): Promise<string> {
  const accessToken = localStorage.getItem(appConfig.lSAccessTokenLabel);

  return accessToken ? Promise.resolve(accessToken) : getNewToken();
}

function getNewToken(): Promise<string> {
  return new Promise(function(resolve, reject) {
    const credentials = `client_id=${appConfig.clientId}&grant_type=implicit`;
    const request = new XMLHttpRequest();
    let accessToken;

    request.open('POST', 'https://api.molt.in/oauth/access_token?');

    request.onload = function() {
        if (request.status === 200) {
            accessToken = JSON.parse(request.response).access_token || '';
            resolve(accessToken);
        } else {
            reject(Error(request.statusText));
        }
    };
    request.onerror = function() {
        reject(Error('Error fetching data.'));
    };
    request.send(credentials);
  });
}
