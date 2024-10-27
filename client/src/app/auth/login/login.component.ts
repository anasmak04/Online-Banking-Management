import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/stores/auth/auth.actions";
import {createLoginForm} from "../../core/validators/login-validators";
import {LoginRequest} from "../../core/models/login-request.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private store$: Store,) {}

  ngOnInit(): void {
    this.loginForm = createLoginForm(this.fb);
  }

  onSubmit(){
    const formValues = this.loginForm.getRawValue();
    const login : LoginRequest = {
      email : formValues.email,
      password : formValues.password,
    }

    this.store$.dispatch(AuthActions.loginUser({login}));

  }

}
