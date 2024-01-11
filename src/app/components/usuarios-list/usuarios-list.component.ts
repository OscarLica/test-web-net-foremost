import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  collection:any = null;
  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){

    this.service.GetUsuario()
      .subscribe({
        next:(res) => {
          this.collection = res;
        },
        error:(error) =>{
          console.log("Error: ",error);
        }
      });
  }
}
