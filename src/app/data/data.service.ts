import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // method for psoting the form
  postUserSettingsForm(userSettings: UserSettings) {}
}
