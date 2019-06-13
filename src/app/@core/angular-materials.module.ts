import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule,
    MatChipsModule, MatSelectModule, MatDialogModule, MatIconRegistry
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        LayoutModule,
        MatChipsModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    declarations: []
})
export class CustomAngularMaterialsModule {

}