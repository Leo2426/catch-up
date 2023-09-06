import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseurl: string = "https://logo.clearbit.com/";
  constructor() { }

  getUrlLogo(source: any):string {
    return `${this.baseurl}/${new URL(source.url).host}`;
  }

}
