import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{
canActivate(){
  if(localStorage.getItem("token"))
  {
    return true;
  }
  else{
  return false;
  }
}
  constructor(private rt:Router) { }
}
