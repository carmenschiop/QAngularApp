import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { MatSortModule } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    var req = this.http.get('http://localhost:44315/api/users/getAllUsers', { headers: { 'Access-Control-Allow-Origin': 'https://aspnetcoreusersapi.azurewebsites.net/' } });

    return req.toPromise();
  }

  getUserById(user_id: number) {
    return this.http.get('http://localhost:44315/api/users/getUserById?id=' + user_id).toPromise();
  }

  updateUser(newUser: User) {
    return this.http.put('http://localhost:44315/api/users/updateUser', newUser).toPromise();
  }

  addUser(newUser: User) {
    return this.http.post('http://localhost:44315/api/users/addUser', newUser ).toPromise();
  }


  deleteUser(user_id: number) {

    return this.http.delete('http://localhost:44315/api/users/deleteuser?id=' + user_id).toPromise();
  }

  getFilteredUsers(filter: string) {
    return this.http.get('http://localhost:44315/api/users/getUsers?filter=' + filter).toPromise();
  }

  getRoles() {
    return this.http.get('http://localhost:44315/api/roles/getRoles').toPromise();
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
