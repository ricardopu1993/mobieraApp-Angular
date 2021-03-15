import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  storageUser: Users;
  
  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logOut(){
      localStorage.removeItem('user');
      this.router.navigateByUrl("/login");

      this.toastr.clear();
      this.toastr.success("Vuelva Pronto", "Hasta Luego");
  }
}
