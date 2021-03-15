import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { AppState } from '../../models/appstate';
import { Store } from '@ngrx/store';
import * as PostActions from './../../post.actions';
import { JsonServerAPIService } from 'src/app/services/json-server-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Information } from 'src/app/models/information';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storageUser: Users;
  information: Information;
  usuario: Observable<Users>;

  constructor(private store: Store<AppState> ,private router: Router,  private toastr: ToastrService, private jsonServer: JsonServerAPIService) { 
    this.usuario = this.store.select('users');
  }

  ngOnInit(): void {
    this.usuario = this.store.select('users');
    this.storageUser = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
    this.chargeInfo();
  }

  chargeInfo(){
    this.jsonServer.getInfoUser(this.storageUser.id)  
    .subscribe(data => {
      this.information = data;
    })
  }
}
