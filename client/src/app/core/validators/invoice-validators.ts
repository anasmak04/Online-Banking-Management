import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createInvoiceForm(fb: FormBuilder): FormGroup {
  return fb.group({
    amount: ['', [Validators.required]],
    dueDate: ['', [Validators.required]],
    status:  ['', [Validators.required]],
    userId: ['', [Validators.required]],
  });
}

