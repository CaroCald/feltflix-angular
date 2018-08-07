import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";

@Injectable()
export class AutorizacionService implements CanActivate {
constructor(private auth: Permissions){

}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.canActivate('', '');
  }
}

class Permissions {
  canActivate(user: string, id: string): boolean {
    return true;
  }
}
