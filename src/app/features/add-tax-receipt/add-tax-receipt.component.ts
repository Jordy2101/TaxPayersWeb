import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxReceipt } from 'src/app/Models/taxreceipt.model';
import { TaxService } from '../tax.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tax-receipt',
  templateUrl: './add-tax-receipt.component.html',
  styleUrls: ['./add-tax-receipt.component.scss']
})
export class AddTaxReceiptComponent implements OnInit {

  id:string;
  data: TaxReceipt = new TaxReceipt();
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();


  constructor(public activeModal: NgbActiveModal,
    private service: TaxService) { }

  ngOnInit(): void {
    this.data.rncCedula = this.id;
    this.service.GetNFC().subscribe((data) => {
      this.data.ncf = data;
    });
  }

  save() {
    Swal.fire({
      title: 'Seguro que quieres guardar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Guardar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.CreateReceiptPayers(this.data).subscribe(
          () => {
            this.notifyParent.emit();
            this.activeModal.close();
            Swal.fire(
              'Guardado con exito!',
              '',
              'success'
            )
          },
          (error) => {
            Swal.fire({
              icon: 'question',
              title: 'Oops...',
              text: error.error
            })
          }
        );
      }
    });
  }

  onChangeAmount(value: number) {
    this.data.tax18 = Number(`${(value * 0.18).toFixed(2)}`);
  }
}
