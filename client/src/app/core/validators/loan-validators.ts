import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createLoanForm(fb: FormBuilder): FormGroup {
  return fb.group({
    amount: ['', [Validators.required]],
    interestRate: ['', [Validators.required]],
    approved: ['', [Validators.required]],
    userId: ['', [Validators.required]],
  });
}

