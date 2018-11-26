import {FormControl} from '@angular/forms'

export function validateEmail(control: FormControl): {[x: string]: any} | null {
	return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i.test(control.value) ? null : {notAValidEmail: true}
}
