import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddpayerComponent } from './features/addpayer/addpayer.component';
import { AddTaxReceiptComponent } from './features/add-tax-receipt/add-tax-receipt.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from  '@angular/common/http';
import { DeatiltaxreceiptComponent } from './features/deatiltaxreceipt/deatiltaxreceipt.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpayerComponent,
    AddTaxReceiptComponent,
    DeatiltaxreceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    NgbPaginationModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AddpayerComponent, AddTaxReceiptComponent, DeatiltaxreceiptComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
