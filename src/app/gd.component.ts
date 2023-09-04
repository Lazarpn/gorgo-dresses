import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { LS_USER_LANGUAGE } from './shared/constants';

@Component({
  selector: 'gd-root',
  templateUrl: './gd.component.html',
  styleUrls: ['./gd.component.scss'],
})
export class GdComponent {
  title = 'Gorgo Dresses';

  constructor(private authService: AuthService, private translateService: TranslateService) {
    let languageToUse = environment.defaultLanguage;
    this.translateService.setDefaultLang(languageToUse);
    const savedLanguage = localStorage.getItem(LS_USER_LANGUAGE);

    if (savedLanguage) {
      languageToUse = savedLanguage;
    } else {
      localStorage.setItem(LS_USER_LANGUAGE, languageToUse);
    }
    this.translateService.use(languageToUse);
  }

  ngOnInit(): void {
    this.authService.autoSignIn();
  }
}
