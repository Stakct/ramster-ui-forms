import {Component, Input} from '@angular/core'

import {BaseInputComponent} from '../base/baseInput.component'
import {DatepickerFieldDataInterface} from './datepicker.interfaces'


@Component({
	selector: 'rui-datepicker',
	templateUrl: './datepicker.template.pug'
	// template: require('./datepicker.template.pug')
})
export class DatepickerComponent extends BaseInputComponent {
	@Input()
	fieldData: DatepickerFieldDataInterface


	constructor() {
		super()
	}

	ngOnInit(): void {
		super.ngOnInit()
	}
}
