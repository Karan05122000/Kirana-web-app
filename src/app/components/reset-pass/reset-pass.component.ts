import { ResetpasswordService } from './../../services/resetpassword.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OldPwdValidators } from './old-password.validators';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { ResetPassword} from '../../models/models';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {
  resetPass = new ResetPassword();
  form1: FormGroup;
  mess: string;
  message = 'Password changed sucessfully';
  errMessage = 'Old Password not valid !!!';
  actionButtonLabel = 'OK';
  action = true;
  setAutoHide = true;
  autoHide = 2000;
  isSidePanelExpanded: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(fb: FormBuilder, private interaction: InteractionService, public snackBar: MatSnackBar,
              private resetpasswordService: ResetpasswordService) {
    this.isSidePanelExpanded = this.interaction.getExpandedStatus();
    this.form1 = fb.group({
      oldPwd: [''],
      newPwd: ['', Validators.required],
      confirmPwd: ['', Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });
  }
  get oldPwd() {
    return this.form1.get('oldPwd');
  }

   get newPwd() {
    return this.form1.get('newPwd');
  }

   get confirmPwd() {
    return this.form1.get('confirmPwd');
  }
  openSnackBar() {
    this.resetPass.old_password = this.form1.controls.oldPwd.value;
    this.resetPass.new_password = this.form1.controls.newPwd.value;
    console.log(this.resetPass.old_password);
    console.log(this.resetPass.new_password);
    this.resetpasswordService.addNewPassword(this.resetPass)
      .subscribe(res => {
          this.mess = res.body.message;
          console.log(res);
          console.log(this.mess);
      });
    if (this.mess === 'password updated') {
        this.snackBar.open(this.message, this.actionButtonLabel);
      }
    if (this.mess === 'failed') {
        alert(this.errMessage);
      }
    this.form1.reset();
  }
  status: boolean = false;
  clickEvent() {
      this.status = !this.status;
  }
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: member-ordering
  value = '';
  update(value: string) { this.value = value; }
  onfilechange(event) {
    console.log(event);
  }
}
