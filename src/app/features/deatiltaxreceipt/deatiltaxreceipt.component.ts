import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxReceipt } from 'src/app/Models/taxreceipt.model';
import { TaxService } from '../tax.service';

@Component({
  selector: 'app-deatiltaxreceipt',
  templateUrl: './deatiltaxreceipt.component.html',
  styleUrls: ['./deatiltaxreceipt.component.scss']
})
export class DeatiltaxreceiptComponent implements OnInit {

  id:string;
  items: TaxReceipt[];
  totalAmoun: number;
  totalTax: number;

  constructor(public activeModal: NgbActiveModal,
    private service: TaxService) { }

  ngOnInit(): void {
    this.getAllbyPayer(this.id);
  }


  getAllbyPayer(id: string){
      this.service.GetReceiptByPayers(id).subscribe((data)=> {
        this.items = data;
        this.items.forEach(item =>{
          this.totalAmoun += item.amount;
          this.totalTax += item.tax18;
        });
      });
  }
}
