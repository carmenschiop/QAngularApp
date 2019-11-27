import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { FormControl, Validators } from '@angular/forms';



export interface Roles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  em = new FormControl('', [Validators.required, Validators.email]);
  emm = new FormControl('', [Validators.required, Validators.email]);
  show: boolean = false;
  private id: number;
  private user: User;
  newUser = new FormControl('', [Validators.required]);
  selectedRoles: any[];
  roles: any[];

  getErrorMessage() {
    return this.em.hasError('required') ? 'You must enter a value' :
        this.em.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessage2() {
    return this.emm.hasError('required') ? 'You must enter a value' :
        this.emm.hasError('email') ? 'Not a valid email' :
            '';
  }


  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getRoles().then(
      rsp => {
        this.roles = <any>rsp;
      })
    if (this.router.url === '/user/add') {
      this.show = true;
      this.user = { id: 0, name: '', email: '', customer: '', second_email: '', roles:[] };
      //alert("you cand add user!");
    } else {
      this.id = history.state.data;
      this.getUserById();
    }
  }

  onBack(): void {
    this.router.navigate(['/user']);
  }

  getUserById() {
    this.userService.getUserById(this.id).then(
      rsp => {
        this.user = <any>rsp;

      })
  }

  update() {
    this.userService.updateUser(this.user).then(
      rsp => {
        alert("Updated user!");
        this.router.navigate(['/user']);
      })
  }
  addUser() {
    
    this.userService.addUser(this.user).then(
      rsp => {
        alert("User added!");
        this.router.navigate(['/user']);
      })
  }
}
