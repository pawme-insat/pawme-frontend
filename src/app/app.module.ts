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
import { AboutUsBannerComponent } from './components/pages/about-us/about-us-banner/about-us-banner.component';
import { AboutUsValuesComponent } from './components/pages/about-us/about-us-values/about-us-values.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { FooterSocialMediaComponent } from './components/shared/footer/footer-social-media/footer-social-media.component';
import { FooterContactComponent } from './components/shared/footer/footer-contact/footer-contact.component';
import { FooterRightsComponent } from './components/shared/footer/footer-rights/footer-rights.component';
import { HomeComponent } from './pages/home/home.component';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsValueComponent } from './components/pages/about-us/about-us-value/about-us-value.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactButtonComponent } from './components/pages/about-us/contact-button/contact-button.component';
import { HomeBannerCtaButtonsComponent } from './components/pages/home/homebanner/home-banner-cta-buttons/home-banner-cta-buttons.component';
import { CircleStepComponent } from './components/pages/home/home-explanation/circle-step/circle-step.component';
import { GenericFormComponent } from './components/forms/generic-form/generic-form.component';
import { SideBannerComponent } from './components/shared/side-banner/side-banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { AuthState } from './utils/ngxs/auth/auth.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

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
    AboutUsValueComponent,
    AboutUsComponent,
    ContactButtonComponent,
    HomeBannerCtaButtonsComponent,
    CircleStepComponent,
    GenericFormComponent,
    SideBannerComponent,
  ],
  imports: [
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AngularSvgIconModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([AuthState], {
      developmentMode: true,
    }),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
