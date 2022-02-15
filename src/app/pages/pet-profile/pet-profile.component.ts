import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of, switchMap, take } from 'rxjs';
import { GetPetGQL, Pet } from 'src/app/services/pawme.graphql.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss'],
})
export class PetProfileComponent implements OnInit {
  constructor(private getPetGQL: GetPetGQL, private route: ActivatedRoute, private router: Router) {}

  pet: Observable<Pet>;
  notFound: Observable<Boolean>;

  ngOnInit(): void {
    const query = (id: number) =>
      this.getPetGQL.watch({ petId: id }).valueChanges.pipe(
        take(1),
        map((e) => e.data.pet)
      );

    const pet = this.route.paramMap.pipe(
      map((e) => e.get('id')),
      switchMap((e) => query(Number(e)))
      // catchError(() => {
      //   this.router.navigate(['/404']);
      //   return of(null);
      // })
    );

    this.pet = pet as any;
  }
}
