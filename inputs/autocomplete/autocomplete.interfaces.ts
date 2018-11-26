import {AbstractControl} from '@angular/forms'
import {BaseInputFieldDataInterface} from '../base/baseInput.interfaces'
import {BaseRESTService} from '../../../services/baseREST.service'

export interface AutocompleteFieldDataInterface extends BaseInputFieldDataInterface {
	filteredSelectListMaxLength?: number,
	loadSelectListOnInit?: boolean,
	masterInputFormControl?: AbstractControl
	searchBoxValidators?: any[],
	searchBoxAsyncValidators?: any[],
	selectList: {text: string, value: any}[],
	selectListRESTService?: BaseRESTService,
	selectListRESTServiceArgs?: {[x: string]: any}
	selectListRESTServiceFilterFieldName?: string,
}
