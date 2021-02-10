import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform{
	transform(items: any[], searchTerm: string){
		let result: any = [];

		if(searchTerm) {
			return items.filter( item => {
				for(let key in item) {
					if(item[key] && item[key].toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
						result.push(item);
						
						return result;
					}
				}
			})
		} else {
			return items;
		}
	}
}