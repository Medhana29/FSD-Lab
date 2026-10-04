import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  jobForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.jobForm = this.fb.group({

      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      mobile: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      dob: ['', Validators.required],

      gender: ['', Validators.required],

      qualification: ['', Validators.required],

      skills: ['', Validators.required],

      address: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]

    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.jobForm.valid) {

      console.log(this.jobForm.value);

      alert('Job application submitted successfully!');

      this.jobForm.reset();
      this.submitted = false;
    }
  }
}