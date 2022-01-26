import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { Validators } from '@angular/forms';
import { addPetFormValues } from './addPetFormValues';
import { CreatePetGQL, GetPetTypesGQL, User } from 'src/app/services/pawme.graphql.service';
import { Select } from '@ngxs/store';
import { map, Observable, switchMap, take } from 'rxjs';
import { SignUpFormValues } from '../../auth/sign-up/sign-up.interface';
import { SelectField } from '../../../models/SelectField';

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
    new SelectField('type', []),
    new Field('breed', FieldType.text, "Please enter your pet's breed", [Validators.required]),
    // this has to be a select input
    new Field('gender', FieldType.text, '', [Validators.required]),
    new Field('birth date', FieldType.date, '', [Validators.required]),
    // this has to be a textarea input
    new Field('about me', FieldType.text, '', [Validators.required, Validators.minLength(10)]),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor(private createPet: CreatePetGQL, private getPetTypes: GetPetTypesGQL) {}

  ngOnInit(): void {
    this.getPetTypes
      .watch()
      .valueChanges.pipe(
        take(1),
        map((e) => e.data.pet_types.map((e) => e.name))
      )
      .subscribe((e) => {
        this.form[1]['options'] = e;
      });
  }

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
