import {Component, Input} from '@angular/core'

import {BaseInputComponent} from '../base/baseInput.component'
import {InputFieldDataInterface} from './input.interfaces'


@Component({
	selector: 'rui-input',
	templateUrl: './input.template.pug'
})
export class InputComponent extends BaseInputComponent {
	@Input()
	fieldData: InputFieldDataInterface


	constructor() {
		super()
	}

	ngOnInit(): void {
		super.ngOnInit()
	}
}
