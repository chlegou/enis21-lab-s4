import {NgModule} from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
})
export class ConfirmDialogModule {
}
