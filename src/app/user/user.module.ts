import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import { MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'user', component: UserComponent },
      {
        path: 'user/:id',
        component: UserDetailsComponent
      },
      { path: 'user/add', 
      component: UserDetailsComponent },
     
    ]),
    CommonModule,
    MatIconModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [
    UserComponent,
    UserDetailsComponent
  ]
})

export class UserModule { }
