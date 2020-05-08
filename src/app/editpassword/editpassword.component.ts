import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.scss']
})
export class EditpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  utilisateur= new FormGroup({
    password: new FormControl('',Validators.required),
    passwordnew: new FormControl('',Validators.required),
    passwordnew2: new FormControl('',Validators.required)

  })

}
