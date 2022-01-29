import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PetProfileComponent } from './pages/pet-profile/pet-profile.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AddPetComponent } from './components/pages/add-pet/add-pet.component';
import { ModalLayoutComponent } from './components/shared/modal-layout/modal-layout.component';
import {UserBioModalComponent} from "./components/modals/user-bio-modal/user-bio-modal.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'profile',
    children: [
      { path: ':id', component: UserProfileComponent },
      { path: '', component: UserProfileComponent },
    ],
  },

  {
    path: 'pet-profile',
    children: [{ path: ':id', component: PetProfileComponent }],
  },

  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: 'add-pet',
    component: AddPetComponent,
  },
  {
    path: 'modal',
    component: UserBioModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
