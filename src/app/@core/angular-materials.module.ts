import { NgModule } from '@angular/core';
import { 
    MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatSidenavModule, MatIconModule, MatListModule 
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        LayoutModule
    ],
    declarations: []
})
export class CustomAngularMaterialsModule {

}