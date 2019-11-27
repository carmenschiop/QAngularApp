import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './user';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private users: User[] = [];
  private user: User;
  displayedColumns: string[] = ['name', 'email', 'customer', 'user_role', '_options'];
  errorMessage = '';
  dataSource;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
  }
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getUsers();
    
  }
  getUsers(){
  this.userService.getAllUsers().then(rsp =>{
    this.users = <any[]> rsp;
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
}

navigateToDetails(id:number){
 this.router.navigate(['/user/'+ id], {state:{data:id}});
}


deleteUser(id:number){
  this.userService.deleteUser(id).then(rsp =>{
alert("You deleted the user!");
this.getUsers();
  })
}

getFiltered(filter: string){
  if(filter == ""){  
    this.getUsers();
}else{
  this.userService.getFilteredUsers(filter).then(rsp =>{
    this.users = <any[]> rsp;
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.paginator = this.paginator;
  })}
}

addNew(){
  this.router.navigate(['/user/add']);
}

}
