import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlexCssComponent} from './components/flex-css/flex-css.component';
import {LoginNgrxComponent} from './components/login-ngrx/login-ngrx.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {IntroductionComponent} from './components/static/introduction/introduction.component';


const routes: Routes = [
  {path: 'introduction', component: IntroductionComponent},
  {path: 'tests/flex-css', component: FlexCssComponent},
  {path: 'tests/contact-list', component: ContactListComponent},
  {path: 'tests/login-ngrx', component: LoginNgrxComponent},
  {path: '**', component: IntroductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
