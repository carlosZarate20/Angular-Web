import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './users/user.module';
import { UserRoutingModule } from './users/user-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormControl} from '@angular/forms';

const routes: Routes = [
  { path: 'login', component:  LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
