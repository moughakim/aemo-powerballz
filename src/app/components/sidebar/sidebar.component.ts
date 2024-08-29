// src/app/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { ItemTypeService } from '../../services/item-type.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private itemTypeService: ItemTypeService) {}

  loadOrders(): void {
    this.itemTypeService.setItemType('orders');
  }

  loadProducts(): void {
    this.itemTypeService.setItemType('products');
  }

  loadCustomers(): void {
    this.itemTypeService.setItemType('customers');
  }

  loadReservations(): void {
    this.itemTypeService.setItemType('reservations');
  }
}
