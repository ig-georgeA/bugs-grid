import { Component, OnInit } from '@angular/core';
import { CustomersType } from '../models/northwind/customers';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public northwindCustomers!: CustomersType[];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
  }
}
