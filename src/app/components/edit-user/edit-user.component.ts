import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appstate';
import { Users } from 'src/app/models/users';
import { JsonServerAPIService } from 'src/app/services/json-server-api.service';
import { NgForm } from '@angular/forms';
import * as PostActions from './../../post.actions';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  storageUser: Users;
  usuario: Observable<Users>;

  constructor(private store: Store<AppState> ,private router: Router,  private toastr: ToastrService, private jsonServer: JsonServerAPIService) {
    this.usuario = this.store.select('users');
  }

  ngOnInit(): void {
    this.usuario = this.store.select('users');
    this.storageUser = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
  }

  editUser(form: NgForm){
    console.log(form);

    var newUser:Users = {
      id: this.storageUser.id,
      user: form.value.user,
      email: form.value.email,
      name: form.value.name,
      password: form.value.password,
      typeUser: form.value.typeUser
    }
    this.jsonServer.editUserInfo(newUser)  
    .subscribe(data => {
      if(data != null){
        this.store.dispatch(new PostActions.EditActuallyUser(
          data.id,
          data.user,
          data.email,
          data.name,
          data.password,
          data.typeUser)
        )
        let serializedData = JSON.stringify(data);
        localStorage.setItem('user', serializedData);

        this.toastr.clear();
        this.toastr.success("Datos actualizados correctamente", "Felicidades");
      }else{
        this.toastr.clear();
        this.toastr.error("Error al editar usuario", "Error");
      }

    })
  }

}
