import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createTransactionForm(fb: FormBuilder): FormGroup {
  return fb.group({
    amount: ['', [Validators.required]],
    type: ['', [Validators.required]],
    sourceAccountId: ['', [Validators.required]],
    destinationAccountId: ['', [Validators.required]],
  });
}

