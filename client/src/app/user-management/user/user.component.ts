import { Component, OnInit } from '@angular/core';
import { UserResponse } from "../../models/user-response.interface";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectUsers } from "../store/user.reducers";
import { UserActions } from "../store/user.actions";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$: Observable<UserResponse[]>;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.getAllUsers());
  }
}
