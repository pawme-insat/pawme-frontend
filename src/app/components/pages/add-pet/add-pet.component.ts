import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { Validators } from '@angular/forms';
import { addPetFormValues } from './addPetFormValues';
import { CreatePetGQL, User } from 'src/app/services/pawme.graphql.service';
import { Select } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss'],
})
export class AddPetComponent implements OnInit {
  @Select((e) => e.auth.user)
  user: Observable<User>;

  public form: Field[] = [
    new Field('name', FieldType.text, "Please enter your pet's name", [Validators.required]),
    // this has to be a select input
    new Field('type', FieldType.text, "Please select your pet's type", [Validators.required]),
    new Field('breed', FieldType.text, "Please select your pet's breed", [Validators.required]),
    new Field('gender', FieldType.text, '', [Validators.required]),
    new Field('birth date', FieldType.date, '', [Validators.required]),
    new Field('about me', FieldType.text, '', [Validators.required, Validators.minLength(10)]),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor(private createPet: CreatePetGQL) {}

  ngOnInit(): void {}

  onSubmit(values: addPetFormValues) {
    // TODO fix with backend
    this.user.pipe(
      switchMap((u) =>
        this.createPet.mutate({
          createPetInput: {
            aboutMe: values['about me'],
            age: values.age,
            sexe: values.gender as any,
            name: values.name,
            user: u.id,
            type: 0,
          },
        })
      )
    );
  }
}
