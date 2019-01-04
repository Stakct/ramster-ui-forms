'use strict'

import {ActivatedRoute, Router} from '@angular/router'
import {Component} from '@angular/core'
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

import {AutocompleteFieldDataInterface, FileInputFieldDataInterface, InputFieldDataInterface, validators} from '../../../../src'
import {BasePageComponent, GlobalEventsService, GESRedirectOptionsInterface} from 'ramster-ui-core'

@Component({
	selector: 'app-page',
	templateUrl: './home.template.pug',
	styleUrls: [
		'./home.styles.scss'
	],
})
export class HomePageComponent extends BasePageComponent {
	testAutocompleteFieldData: AutocompleteFieldDataInterface
	testFileInputFieldData: FileInputFieldDataInterface
	testInputFieldData: InputFieldDataInterface

	constructor(
		activatedRoute: ActivatedRoute,
		globalEventsService: GlobalEventsService
	) {
		super(activatedRoute, globalEventsService, ['reset'], ['onInitialDataLoaded'])
	}

	reset(): void {
		super.reset()

		this.testAutocompleteFieldData = {
			inputFormControl: new FormControl(''),
			placeholder: 'Autocomplete Input',
			selectList: [{text: 'Value 1', value: 1}, {text: 'Value 2', value: 2}]
		}
		this.testFileInputFieldData = {
			inputFormControl: new FormControl(''),
			placeholder: 'File Input'
		}
		this.testInputFieldData = {
			inputFormControl: new FormControl(''),
			placeholder: 'Regular Input',
			type: 'text'
		}
		this.globalEventsService.setLayoutData({hasHeader: true})
	}

	onInitialDataLoaded(): void {
	}
}
