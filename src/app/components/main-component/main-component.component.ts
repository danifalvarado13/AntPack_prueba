import { Component, OnInit } from '@angular/core';
import {UserServicesService} from '../../services/user-services.service';
import {userModel} from '../../models/userModels';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor(private users:UserServicesService) { }
  
  usuarios:userModel[]=[];
  ngOnInit(): void {
    
    this.users.users().subscribe(usersData=>{
      this.organice(usersData);
      
    })
    
    
  }
  organice(datos:any){

   
    datos.forEach(element => {  
      let dato= new userModel;
      dato.name = element.name;
      dato.userName= element.username;
      dato.userData=[];
      dato.userData.push(element.address.city);
      dato.userData.push(element.company.name);
      dato.userData.push(element.email);
      const emailHash = Md5.hashStr(element.email.trim().toLowerCase());
      dato.img_user="https://www.gravatar.com/avatar/"+emailHash;
      this.usuarios.push(dato);
    });
    console.log(this.usuarios);
  }
}
