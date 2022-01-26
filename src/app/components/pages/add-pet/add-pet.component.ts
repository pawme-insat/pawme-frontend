import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { Validators } from '@angular/forms';
import { SignUpFormValues } from '../../auth/sign-up/sign-up.interface';
import { SelectField } from '../../../models/SelectField';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent implements OnInit {
  public form: Field[] = [
    new Field('name', FieldType.text, "Please enter your pet's name", [Validators.required]),
    // this has to be a select input
    new SelectField('type',['dog', 'cat', 'bird', 'hamster']),
    new Field('breed', FieldType.text, "Please enter your pet's breed", [Validators.required]),
    // this has to be a select input
    new Field('gender', FieldType.text, '', [Validators.required]),
    new Field('birth date', FieldType.date, '', [Validators.required]),
    // this has to be a textarea input
    new Field('about me', FieldType.text, '', [Validators.required, Validators.minLength(10)]),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(values: SignUpFormValues) {}
}
