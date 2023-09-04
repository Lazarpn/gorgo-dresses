import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExceptionDetail } from 'src/app/shared/models/exception-detail';
import { TranslationMessage } from 'src/app/shared/models/translation-message';
import { ChangeEmailModel } from 'src/app/shared/models/user/change-email-model';
import { ResentEmailResponseModel } from 'src/app/shared/models/user/resent-email-response-model';
import { UserConfirmEmailModel } from 'src/app/shared/models/user/user-confirm-email-model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'gd-verify-email-modal',
  templateUrl: './verify-email-modal.component.html',
  styleUrls: ['./verify-email-modal.component.scss'],
})
export class VerifyEmailModalComponent implements OnInit {
  changeEmailMode: boolean = false;
  errorMessages: TranslationMessage[] = [];
  errorMessagesEmail: TranslationMessage[] = [];
  userEmail: string;
  timerDisplay: string;
  timerTimeLeft: number;
  codeModel: UserConfirmEmailModel = {
    emailVerificationCode: '',
  };
  emailModel: ChangeEmailModel = {
    newEmail: '',
  };

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private utilityService: UtilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userEmail = this.profileService.user.email;
    const codeExpiryDate = this.profileService.user.dateVerificationCodeExpires;
    if (new Date() < codeExpiryDate && codeExpiryDate && !this.timerTimeLeft) {
      this.startResendEmailTimer(this.profileService.user.dateVerificationCodeExpires);
    }
  }

  onSubmitCode() {
    this.authService.verifyEmail(this.codeModel).subscribe({
      next: _ => {
        this.profileService.user.emailConfirmed = true;
        this.router.navigate(['/vencanice']);
      },
      error: (exceptions: ExceptionDetail[]) => {
        this.errorMessages = this.utilityService.getErrorMessages(exceptions);
      },
    });
  }

  onEmailChange() {
    this.changeEmailMode = true;
  }

  onEmailChangeConfirm() {
    this.authService.changeVerificationEmail(this.emailModel).subscribe({
      next: _ => {
        this.changeEmailMode = false;
        this.userEmail = this.emailModel.newEmail;
        this.profileService.user.email = this.userEmail;
      },
      error: (exceptions: ExceptionDetail[]) => {
        this.errorMessagesEmail = this.utilityService.getErrorMessages(exceptions);
      },
    });
  }

  onEmailChangeCancel() {
    this.changeEmailMode = false;
    this.errorMessagesEmail = [];
    this.emailModel.newEmail = '';
  }

  onResendEmail() {
    this.authService.resendVerificationEmail().subscribe({
      next: (model: ResentEmailResponseModel) => {
        this.startResendEmailTimer(model.newCodeExpiryDate);
      },
      error: (exceptions: ExceptionDetail[]) => {
        const errors = this.utilityService.getErrorMessages(exceptions);
        this.errorMessages = this.errorMessages.concat(errors);
      },
    });
  }

  private startResendEmailTimer(date: Date) {
    const timer = setInterval(() => {
      this.timerTimeLeft--;
      this.timerDisplay = this.calculateDisplayTime(date);
      if (this.timerTimeLeft === 0) {
        clearInterval(timer);
        this.timerDisplay = '';
      }
    }, 1000);
  }

  private calculateDisplayTime(date: Date): string {
    this.timerTimeLeft = Math.floor((new Date(date).getTime() - new Date().getTime()) / 1000);
    const minutes = Math.floor(this.timerTimeLeft / 60);
    const seconds = this.timerTimeLeft % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
