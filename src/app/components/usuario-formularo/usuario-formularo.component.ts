import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-usuario-formularo',
  templateUrl: './usuario-formularo.component.html',
  styleUrls: ['./usuario-formularo.component.scss']
})
export class UsuarioFormularoComponent implements OnInit {

  usuario:any = null;
  id:number = 0;
  constructor(public _Activatedroute:ActivatedRoute, public apiService:ApiServiceService) { }

  ngOnInit(): void {
    let id = this._Activatedroute.snapshot.params["id"];
    this.apiService.GetUsuarioById(id)
      .subscribe({
        next:(res) => {
          this.usuario = res;
        },
        error:(error) =>{}
      });
  }
save(){
  this.apiService.Update(this.usuario.Id, this.usuario)
  .subscribe({
    next:(res) => {

      console.log(res);
    }
  })
}
}
