import { Injectable } from '@angular/core';  
import { Router, NavigationStart } from '@angular/router';  
import { Observable, Subject } from 'rxjs';  
  
import { Alert, AlertType } from '../../@shared/models/alert/alert.model';  
  
@Injectable()  
export class AlertService {  
    public subject = new Subject<Alert>();  
    public keepAfterRouteChange = true;  
  
    constructor(public router: Router) {  
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true  
        router.events.subscribe(event => {  
            if (event instanceof NavigationStart) {  
                if (this.keepAfterRouteChange) {  
                    // only keep for a single route change  
                    this.keepAfterRouteChange = false;  
                } else {  
                    // clear alert messages  
                    this.clear();  
                }  
            }  
        });  
    }  
  
    getAlert(): Observable<any> {  
        return this.subject.asObservable();  
    }  
  
    success(message: string, keepAfterRouteChange = false) {  
        this.showNotification(AlertType.Success, message, keepAfterRouteChange);  
    }  
  
    error(message: string, keepAfterRouteChange = false) {  
        this.showNotification(AlertType.Error, message, keepAfterRouteChange);  
    }  
  
    info(message: string, keepAfterRouteChange = false) {  
        this.showNotification(AlertType.Info, message, keepAfterRouteChange);  
    }  
  
    warn(message: string, keepAfterRouteChange = false) {  
        this.showNotification(AlertType.Warning, message, keepAfterRouteChange);  
    }  
  
    showNotification(type: AlertType, message: string, keepAfterRouteChange = false) {  
        this.keepAfterRouteChange = keepAfterRouteChange;  
        this.subject.next(<Alert>{ type: type, message: message });  
    }  
  
    clear() {  
        this.subject.next();  
    }  
}  