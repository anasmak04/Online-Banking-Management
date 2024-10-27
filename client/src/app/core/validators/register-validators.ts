import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createRegisterForm(fb: FormBuilder): FormGroup {
  return fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
}

