import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxPayersDto } from 'src/app/Models/taxpayers.model';
import { TaxService } from '../tax.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpayer',
  templateUrl: './addpayer.component.html',
  styleUrls: ['./addpayer.component.scss']
})
export class AddpayerComponent implements OnInit {

  id:number;
  typePerson: any[] = ["PERSONA FISICA", "PERSONA JURIDICA"];
  data: TaxPayersDto = new TaxPayersDto();
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal,
    private service: TaxService) { }

  ngOnInit(): void {
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
        this.service.save(this.data).subscribe(
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
}
