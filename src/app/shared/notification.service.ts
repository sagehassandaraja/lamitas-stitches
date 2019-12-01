import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };
  // tslint:disable-next-line:variable-name
  constructor(private _matSnackBar: MatSnackBar) { }
  success(msg) {
    this.config.panelClass = ['notification', 'success'];
    this._matSnackBar.open(msg, '', this.config);
  }
}
