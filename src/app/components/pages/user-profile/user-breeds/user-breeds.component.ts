import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-breeds',
  templateUrl: './user-breeds.component.html',
  styleUrls: ['./user-breeds.component.scss']
})
export class UserBreedsComponent implements OnInit {

  breeds: String[] =[]

  constructor() { }

  ngOnInit(): void {
    // get the breeds of current user pets
    for (let i=0; i <5 ; i++) {
      this.breeds.push('Rottweiler')
    }
  }

}
