import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createLoginForm(fb: FormBuilder): FormGroup {
  return fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
}

