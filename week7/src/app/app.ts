import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      subject: ['', Validators.required],

      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      alert('Form submitted successfully!');

      console.log(this.contactForm.value);

      this.contactForm.reset();
      this.submitted = false;
    }
  }
}