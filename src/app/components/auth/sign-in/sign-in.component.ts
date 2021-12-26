import { Component, OnInit } from '@angular/core';
import {Field} from "../../../models/Field";
import {FieldType} from "../../../models/FieldType.enum";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: Field[] = []
  constructor() { }

  ngOnInit(): void {
    this.form.push(new Field('username', FieldType.text, 'Please enter your username', '', []))
    this.form.push(new Field('email', FieldType.email, 'Please enter your email', '',[]))
  }

}
