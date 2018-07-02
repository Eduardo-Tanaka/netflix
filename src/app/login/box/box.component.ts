import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-box',
  templateUrl: './box.component.html',
  styleUrls: ['../login.component.css']
})
export class BoxComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    // console.log(this.loginForm)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loginForm.get('email').markAsTouched();
      this.loginForm.get('password').markAsTouched();
      return;
    }

    alert('SUCCESS!! :-)')
  }
}
