import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaxPayersDto } from './Models/taxpayers.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddpayerComponent } from './features/addpayer/addpayer.component';
import { modalConfig } from './Models/modalConfig';
import { NgxSpinnerService } from 'ngx-spinner';
import { TaxService } from './features/tax.service';
import Swal from 'sweetalert2';
import { AddTaxReceiptComponent } from './features/add-tax-receipt/add-tax-receipt.component';
import { DeatiltaxreceiptComponent } from './features/deatiltaxreceipt/deatiltaxreceipt.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Contribuyentes';
  @Input() filter: any = {};
  page: number = 1;
  items: TaxPayersDto[];
  itemsPerPage: any;
  totalItems: any;
  @Output() enviarFiltro: EventEmitter<any> = new EventEmitter();


  constructor(
    private loading: NgxSpinnerService,
    private service: TaxService,
    public modalService: NgbModal) { }

  ngOnInit() {
    this.getAll(false);
  }

  create(){
    var modal = this.modalService.open(AddpayerComponent, modalConfig.modalLg);
    modal.componentInstance.notifyParent.subscribe(() => {
      this.getAll(false);
    });
  }

  addReceipt(id:string){
    var modal = this.modalService.open(AddTaxReceiptComponent, modalConfig.modalLg);
    modal.componentInstance.id = id;
    modal.componentInstance.notifyParent.subscribe(() => {
      this.getAll(false);
    });
  }

  viewReceipt(id:string){
    var modal = this.modalService.open(DeatiltaxreceiptComponent, modalConfig.modalLg);
    modal.componentInstance.id = id;
    modal.componentInstance.notifyParent.subscribe(() => {
      this.getAll(false);
    });
  }

  inactive(id: number){

    Swal.fire({
      title: 'Seguro que quieras Inactivar este Contribuyente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Guardar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.InactiveTaxPayers(id).subscribe(
          () => {
            this.getAll(false);
            Swal.fire(
              'Guardado con exito!',
              '',
              'success'
            )
          });
      }
    });

  }


  getAll(reset: boolean) {

    this.loading.show();

    if (!this.filter.keyword) this.filter.keyword = "";

    this.service.getPaged(this.page, this.filter).subscribe(
      (response) => {
        this.items = response.data;
        this.itemsPerPage = response.pageSize;
        this.totalItems = response.totalCount;
        this.loading.hide();
      },
      (error) => {
        // this.alertService.info(error.error.ErrorMessage);
        this.loading.hide();
      }
    );

  }

  pageChanged(event: any) {
    this.page = event;
    this.getAll(false);
  }
}
