import { Component, OnInit } from '@angular/core';
import { UserResponse } from "../../../core/models/user-response.interface";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectUsers } from "../../../core/stores/user/user.reducers";
import { UserActions } from "../../../core/stores/user/user.actions";

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
