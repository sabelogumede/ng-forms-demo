import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // method for sorting the form
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // http post request to an online testing service (https://putsreq.com)
    return this.http.post('https://putsreq.com/amtk4XAHHv8WvnS6ahBl', userSettings);

    // return of(userSettings);
  }
}
