import { Component, OnInit,Input } from '@angular/core';
import { userModel } from 'src/app/models/userModels';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  @Input()
  user:userModel
  
  
  changeImage(){
    return{
      'background-image':this.user.img_user
    };
  }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
