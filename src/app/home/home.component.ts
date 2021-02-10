import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Deal } from '../deal';
import { ViewPorts } from '../viewports';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isMobile: boolean = false;
  
	searchTerm: string = "";
	direction: string= "asc";
	column: string= "code";
	type: string= "string";
	public deals: Deal[] = [];

	constructor(public service: CommonService, private viewport: ViewPorts) {
  		service.getDeals().subscribe((res: Deal[]) => {
  			this.deals = res;
  		});

  		this.service.subject.asObservable().subscribe((searchTerm) => {
      	this.searchTerm = searchTerm;
      });

      this.viewport.viewPortChange().subscribe((val) => {
        this.isMobile = val.isLtSMVP;
      });
  	}

  	ngOnInit(): void {
  	
  	}

  	setSortParams(param: {dir: string, col: string}) {
  		this.direction = param.dir;
  		this.column = param.col;
	}
}
