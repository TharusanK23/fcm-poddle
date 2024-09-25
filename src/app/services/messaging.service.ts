import { Injectable, signal } from '@angular/core';
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  public newNotification = signal<any>(null);
  public token = signal<string>('No Token');

  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private http: HttpClient
  ) { }

  public requestToken() {
    this.angularFireMessaging.requestToken.subscribe({
      next: (token: string | null) => {
        if (token != null) {
          console.log(token);
          this.token.set(token);
          // this._validateFCMToken(token!);
          this._receiveMessage();
        } else {
          console.error("Firebase token not found");
        }
      },
      error: (err: any) => {
        console.error('Unable to get permission to notify.', err);
      },
      complete: () => {}
    });
  }

  private _registerFCMTokenAPI(token: any) {
    return this.http.get<any>(environment.baseUrl + `Fcm/addFcmConntection/${token}`, { params: { channelId: '', userType: 3 } });
  }

  private _validateFCMToken(token: string) {
    this._registerFCMTokenAPI(token).subscribe({
      next: (res: any) => {
        const _deviceToken = res.result.deviceToken;
        if(_deviceToken !== null) {
          localStorage.setItem('FCMToken', token);
          localStorage.setItem('FCMDevice', _deviceToken);
        }
      },
      error: (err: any) => {
        console.error('Unable to register the FCM token.', err);
      },
      complete: () => {
        this._receiveMessage();
      }
    });
  }

  private _receiveMessage() {
    this.angularFireMessaging.messages.subscribe({
      next: (payload: any) => {
        this.newNotification.set(payload);
      },
      error: (err: any) => {
        console.error('Unable to notify any new notification.', err);
      },
      complete: () => {}
    });
  }
}
