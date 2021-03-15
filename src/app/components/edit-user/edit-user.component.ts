import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/appstate';
import { Users } from 'src/app/models/users';
import { JsonServerAPIService } from 'src/app/services/json-server-api.service';
import { NgForm } from '@angular/forms';

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

  cancel(){

  }

  editUser(form: NgForm){

  }

}
