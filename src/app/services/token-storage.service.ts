import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  constructor() { }

  public signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user: User) {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if(user){
      return JSON.parse(user);
    }
    return null;
  }

  public isAdmin(): boolean {
    let user = window.sessionStorage.getItem(this.USER_KEY);
    if(user){
      let userParsed: User;
      userParsed = JSON.parse(user);
      for(let i = 0; i < userParsed.roles.length; ++i){
        if(userParsed.roles[i] === 'ROLE_ADMIN'){
          return true;
        }
      }
    }
    return false;
  }

  public isUser(): boolean {
    let user = window.sessionStorage.getItem(this.USER_KEY);
    if(user){
      let userParsed: User;
      userParsed = JSON.parse(user);
      for(let i = 0; i < userParsed.roles.length; ++i){
        if(userParsed.roles[i] === 'ROLE_USER'){
          return true;
        }
      }
    }
    return false;
  }
}
