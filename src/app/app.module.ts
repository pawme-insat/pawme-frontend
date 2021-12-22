import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HotdogMenuComponent } from './components/shared/hotdog-menu/hotdog-menu.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { NavigationItemComponent } from './components/shared/navigation-item/navigation-item.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HomebannerComponent } from './components/pages/home/homebanner/homebanner.component';
import { HomeExplanationComponent } from './components/pages/home/home-explanation/home-explanation.component';
import { HomeReviewsComponent } from './components/pages/home/home-reviews/home-reviews.component';
import { AboutUsBannerComponent } from './components/pages/aboutUs/about-us-banner/about-us-banner.component';
import { AboutUsValuesComponent } from './components/pages/aboutUs/about-us-values/about-us-values.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { FooterSocialMediaComponent } from './components/shared/footer/footer-social-media/footer-social-media.component';
import { FooterContactComponent } from './components/shared/footer/footer-contact/footer-contact.component';
import { FooterRightsComponent } from './components/shared/footer/footer-rights/footer-rights.component';
import { HomeComponent } from './pages/home/home.component';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotdogMenuComponent,
    NavigationComponent,
    NavigationItemComponent,
    SignInComponent,
    SignUpComponent,
    HomebannerComponent,
    HomeExplanationComponent,
    HomeReviewsComponent,
    AboutUsBannerComponent,
    AboutUsValuesComponent,
    LogoComponent,
    FooterSocialMediaComponent,
    FooterContactComponent,
    FooterRightsComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([], {
      developmentMode: true,
    }),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
