import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexCssComponent} from './components/flex-css/flex-css.component';
import {LoginNgrxComponent} from './components/login-ngrx/login-ngrx.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {MaterialModule} from './material.module';
import {IntroductionComponent} from './components/static/introduction/introduction.component';
import {NavBarComponent} from './components/static/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexCssComponent,
    LoginNgrxComponent,
    ContactListComponent,
    IntroductionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
