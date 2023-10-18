import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  API_URL= 'https://api.github.com/users/juansueldo';
  
  getInfo(){
    const data = fetch(this.API_URL).then(data => data.json());
    return data;
  }
}
