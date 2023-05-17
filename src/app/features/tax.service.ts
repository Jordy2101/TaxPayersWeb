import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoint } from 'src/environments/environment';
import { TaxPayersDto } from '../Models/taxpayers.model';
import { TaxReceipt } from '../Models/taxreceipt.model';

@Injectable({
  providedIn: 'root'
})
export class TaxService {


  constructor(public httpClient: HttpClient) {
  }

  getPaged(page: number, filter: any, size?: number) {
    return this.httpClient.get<any>(`${endpoint.TaxPayers}/GetPagedtaxPayers?keyword=${filter.keyword}&PageNumber=${page}&PageSize=${!size ? 10 : size}`);
  }

  save(data: TaxPayersDto) {
    return this.httpClient.post(`${endpoint.TaxPayers}/Create`, data);
  }

  InactiveTaxPayers(id: number) {
    return this.httpClient.patch(`${endpoint.TaxPayers}/InactiveTaxPayers/${id}`, null);
  }

  GetReceiptByPayers(id: string) {
    return this.httpClient.get<any>(`${endpoint.TaxReceipt}/GetReceiptByPayers?id=${id}`);
  }

  GetNFC() {
    return this.httpClient.get(`${endpoint.TaxReceipt}/GetNFC`, { responseType: "text"});
  }

  CreateReceiptPayers(data: TaxReceipt) {
    return this.httpClient.post(`${endpoint.TaxReceipt}/CreateReceiptPayers`, data);
  }

}
