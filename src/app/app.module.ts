import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

import { HeaderComponent } from './components/general/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { LateralMenuComponent } from './components/general/lateral-menu/lateral-menu.component';
import { HomeComponent } from './components/home/home.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LateralMenuComponent,
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot({
      users: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
