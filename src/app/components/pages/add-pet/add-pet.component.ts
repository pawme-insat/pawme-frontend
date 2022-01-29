import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { Validators } from '@angular/forms';
import { addPetFormValues } from './addPetFormValues';
import { CreatePetGQL, GetPetTypesGQL, PetType, SexeEnum, User } from 'src/app/services/pawme.graphql.service';
import { Select } from '@ngxs/store';
import { map, Observable, switchMap, take } from 'rxjs';
import { SignUpFormValues } from '../../auth/sign-up/sign-up.interface';
import { SelectField } from '../../../models/SelectField';
import { TextAreaField } from '../../../models/TextAreaField';

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
    new SelectField('type', [], "Please select your pet's type", [Validators.required]),
    new Field('breed', FieldType.text, "Please enter your pet's breed", [Validators.required]),
    new SelectField('gender', ['boy', 'girl'], "Please select your pet's gender", [Validators.required]),
    new Field('birth date', FieldType.date, '', [Validators.required]),
    new TextAreaField('about me', 5, 10),
  ];

  public isLoading = false;
  public formErrors: string[] = [];
  private petTypes: PetType[] = [];

  constructor(private createPet: CreatePetGQL, private getPetTypes: GetPetTypesGQL) {}

  ngOnInit(): void {
    this.getPetTypes
      .watch()
      .valueChanges.pipe(take(1))
      .subscribe((e) => {
        this.form[1]['options'] = e.data.pet_types.map((e) => e.name);
        this.petTypes = e.data.pet_types as any;
        console.log(e);
      });
  }

  onSubmit(values: addPetFormValues) {
    const mappingGender = {
      male: SexeEnum.Masculin,
      female: SexeEnum.Feminin,
    };

    this.user.pipe(
      switchMap((u) =>
        this.createPet.mutate({
          createPetInput: {
            aboutMe: values['about me'],
            birth_date: values['birth date'],
            sexe: mappingGender[values.gender],
            name: values.name,
            user: u.id,
            type: this.petTypes.find((e) => e.name === values.type).id,
          },
        })
      )
    );
  }
}
