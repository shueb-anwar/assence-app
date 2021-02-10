import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
	searchTerm: string = "";
	constructor( public service: CommonService ) { }

	ngOnInit(): void {

	}

	search() {
		this.service.subject.next(this.searchTerm);
  	}

}
