import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createAccountForm(fb: FormBuilder): FormGroup {
    return fb.group({
        accountId: ['', [Validators.required]],
        balance: ['', [Validators.required]],
        userId: ['', [Validators.required]],
    });
}

