import { Component, OnInit } from '@angular/core';  
  
import { AlertService } from "../../../@core/services/alert.service";  
import { Alert, AlertType } from '../../models/alert/alert.model';
  
@Component({  
    selector: 'alert-app',  
    templateUrl: 'alert.component.html',  
    styleUrls: ['./alert.component.scss']  
})  
  
export class AlertComponent {  
    alerts: Alert[] = [];  
  
    constructor(public _alertService: AlertService) { }  
  
    ngOnInit() {  
        this._alertService.getAlert().subscribe((alert: Alert) => {  
            this.alerts = [];  
            if (!alert) {  
                this.alerts = [];  
                return;  
            }  
            this.alerts.push(alert);  
            setTimeout(() => {  
                this.alerts = this.alerts.filter(x => x !== alert);  
            }, 4000);  
        });  
    }  
  
    removeAlert(alert: Alert) {  
        this.alerts = this.alerts.filter(x => x !== alert);  
    }  
  
    /**Set css class for Alert -- Called from alert component**/      
    cssClass(alert:Alert) {  
        if (!alert) {  
            return;  
        }  
        switch (alert.type) {  
            case AlertType.Success:  
                return 'alert-success';  
            case AlertType.Error:  
                return 'alert-error';  
            case AlertType.Info:  
                return 'alert-info';  
            case AlertType.Warning:  
                return 'alert-warning';  
        }  
    }  
}  