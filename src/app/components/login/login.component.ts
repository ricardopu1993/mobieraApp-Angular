import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import { JsonServerAPIService } from 'src/app/services/json-server-api.service';
import { Users } from '../../models/users';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from './../../post.actions';
import { AppState } from '../../models/appstate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: Observable<Users>;
  usuarios: Array<Users>;
  userName: any;
  password: any;
  authUser: Boolean = false;
  
  constructor(private store: Store<AppState> ,private router: Router,  private toastr: ToastrService, private jsonServer: JsonServerAPIService) {
    this.user = this.store.select('users');
   }

  ngOnInit(): void {
  }

  sendData(form: NgForm){

    if(form.control.status == 'INVALID'){
      this.toastr.clear();
      this.toastr.error("Por favor diligencie todos los campos", "Error");
      form.resetForm();
    }else{
      this.jsonServer.getUsers()  
      .subscribe(data => {

        var currentUser = form.controls['userName'].value;
        var currentPassword = form.controls['password'].value;
        this.usuarios = data;

        this.usuarios.forEach(element => {
          if((currentUser  === element.user || currentUser  === element.email || currentUser  === element.name) && element.password === currentPassword){
            let serializedData = JSON.stringify(element);
            this.authUser = true;
            localStorage.setItem('user', serializedData);
            this.store.dispatch(new PostActions.EditActuallyUser(
              element.user, 
              element.name,
              element.email,
              element.password,
              element.typeUser)
            )
          }
        });

        if(this.authUser == true){
          this.toastr.clear();
          this.toastr.success("Bienvenido", "Correcto");
          form.resetForm();
          this.router.navigateByUrl("home");
        }else{
          this.toastr.clear();
          this.toastr.error("Usuario o contraseña incorrectos", "Error");
          form.resetForm();
        }
      });


    }
  }

  

}
