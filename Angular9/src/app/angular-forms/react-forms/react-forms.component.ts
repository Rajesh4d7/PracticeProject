import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styleUrls: ['./react-forms.component.scss']
})
export class ReactFormsComponent implements OnInit {
  registration=new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    cnfmpassword:new FormControl(''),
    mail:new FormControl(''),
    gender:new FormControl(''),
    qualification:new FormControl(''),
    address:new FormGroup({
      flatNo:new FormControl(''),
      street:new FormControl(''),
      pincode:new FormControl(''),
      district:new FormControl('')
    })
  })
  constructor() { }

  ngOnInit() {
  }
  save(){
    console.log(this.registration)
  }
}
