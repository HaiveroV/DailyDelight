import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertComponent } from 'src/app/@shared/components/alert/alert.component';
import { AlertService } from 'src/app/@core/services/alert.service';


@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        AlertComponent
    ], providers: [
        AlertService
    ]
})
export class AlertModule {
}    