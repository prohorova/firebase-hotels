import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { EmailPasswordCredentials } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  authForm: FormGroup;
  isLoggingIn = true;

  constructor(private fb: FormBuilder, private af: AngularFire) {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  toggleLogin() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  loginWithGoogle() {
    this.error = '';
    this.af.auth.login({method: AuthMethods.Popup, provider: AuthProviders.Google})
      .catch(err => {
        this.error = err.message || 'An error occurred';
      });
  }

  submit(credentials: EmailPasswordCredentials) {
    this.error = '';
    if (this.isLoggingIn) {
      this.login(credentials);
    } else {
      this.register(credentials);
    }
  }

  private login(credentials: EmailPasswordCredentials) {
    this.af.auth.login(credentials, {method: AuthMethods.Password, provider: AuthProviders.Password})
      .catch(err => {
        this.error = err.message || 'An error occurred';
      });
  }

  private register(credentials: EmailPasswordCredentials) {
    this.af.auth.createUser(credentials)
      .catch(err => {
        this.error = err.message || 'An error occurred';
      });
  }

}
