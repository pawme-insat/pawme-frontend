import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { Validators } from '@angular/forms';
import { SignUpFormValues } from '../../auth/sign-up/sign-up.interface';
import { SelectField } from '../../../models/SelectField';
import { TextAreaField } from '../../../models/TextAreaField';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent implements OnInit {
  public form: Field[] = [
    new Field('name', FieldType.text, "Please enter your pet's name", [Validators.required]),
    new SelectField('type', ['dog', 'cat', 'bird', 'hamster'], "Please select your pet's type", [Validators.required]),
    new Field('breed', FieldType.text, "Please enter your pet's breed", [Validators.required]),
    new SelectField('gender', ['boy', 'girl'],"Please select your pet's gender", [Validators.required]),
    new Field('birth date', FieldType.date, '', [Validators.required]),
    new TextAreaField('about me', 5, 10),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(values: SignUpFormValues) {}
}
