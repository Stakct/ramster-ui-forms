import {FormControl} from '@angular/forms'

export function matchSibling(siblingName: string): Function {
	return (control: FormControl): {[x: string]: any} | null => control.parent && (control.value === control.parent.get(siblingName).value) ? null : {doesNotMatchSibling: true}
}
