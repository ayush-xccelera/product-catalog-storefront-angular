import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  form: FormGroup;
  status: SubmitStatus = 'idle';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'submitting';

    // MOCK: simulated contact form submission (no backend endpoint wired up yet)
    // TODO(USE_MOCK): verify path + response shape against the real backend's OpenAPI schema before flipping this to false.
    setTimeout(() => {
      const succeeded = true;
      if (succeeded) {
        this.status = 'success';
        this.form.reset();
      } else {
        this.status = 'error';
      }
    }, 600);
  }
}
