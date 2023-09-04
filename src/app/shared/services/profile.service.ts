import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExceptionDetail } from '../models/exception-detail';
import { TranslationMessage } from '../models/translation-message';
import { UtilityService } from './utility.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  url: string = `${environment.url}/api`;
  user: User = null;
  userPhoto: string = null;
  userPhotoChanged = new Subject<string>();
  preferenceCaloriesChanged = new Subject<number>();

  constructor(private http: HttpClient, private utilityService: UtilityService) {}

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getUserInfo() {
    return {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
    };
  }
}
