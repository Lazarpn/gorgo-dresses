import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user.model';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../services/profile.service';
import { DressDataService } from '../services/dress-data.service';
import { DressService } from '../services/dress.service';
import { DressAdminModel } from '../models/dress/dress-admin-model';

@Injectable({ providedIn: 'root' })
export class DressResolver implements Resolve<DressAdminModel> {
  constructor(private dressDataService: DressDataService, private dressService: DressService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DressAdminModel> {
    const id = route.params['id'];
    return this.dressDataService.getDressAdmin(id).pipe(
      tap(dress => {
        this.dressService.setCurrentAdminDress(dress);
      })
    );
  }
}
