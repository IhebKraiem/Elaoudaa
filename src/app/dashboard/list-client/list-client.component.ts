import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  listClient: Client[] = [];
  p:any;
  name: any;

  constructor(private _clientService: ClientService ,
    private toastr: ToastrService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.obtenerClient();
  }

  obtenerClient(){
    this._clientService.getClient().subscribe(data =>{
      console.log(data);
      this.listClient = data;
    }, error =>{
      console.log(error);
    })
  }
  eliminateClient(id:any){
    this._clientService.eliminateClient(id).subscribe(data =>{
    this.toastr.error('Le Client été supprimer avec succès' );
    
    }, error =>{
      console.log(error);
    })
  }
  Search(){
    if(this.name ==""){
      this.ngOnInit();
    }else{
      this.listClient = this.listClient.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
  
}
