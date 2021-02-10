import { Pipe, PipeTransform } from '@angular/core';
import { Deal } from '../../deal'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  	transform(items: Deal[], direction: string, column: string) {
		return [...items.sort( (a: any, b: any) : any => {
			if (a[column].toUpperCase() < b[column].toUpperCase() && direction == 'asc') return -1;
			else if (a[column].toUpperCase() > b[column].toUpperCase() && direction == 'desc') return -1;
		})]
	}
}
