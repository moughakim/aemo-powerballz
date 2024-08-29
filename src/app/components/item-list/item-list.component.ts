import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ItemTypeService } from '../../services/item-type.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  searchTerm: string = '';
  displayedColumns: string[] = ['id', 'name', 'details'];
  dataSource: any[] = [];
  filteredDataSource: any[] = [];

  constructor(private itemService: ItemService, private itemTypeService: ItemTypeService) {}

  ngOnInit(): void {
    // Subscribe to item type changes
    this.itemTypeService.itemType$.subscribe(itemType => {
      this.loadItems(itemType);
    });

    // Load orders by default
    this.loadItems('orders');
  }

  loadItems(itemType: string): void {
    switch (itemType) {
      case 'orders':
        this.dataSource = this.itemService.getOrders();
        break;
      case 'products':
        this.dataSource = this.itemService.getProducts();
        break;
      case 'customers':
        this.dataSource = this.itemService.getCustomers();
        break;
      case 'reservations':
        this.dataSource = this.itemService.getReservations();
        break;
      default:
        this.dataSource = [];
        break;
    }
    this.applyFilter(this.searchTerm);
  }

  applyFilter(filterValue: string): void {
    this.filteredDataSource = this.dataSource.filter(item => 
      Object.values(item).some((val:any) => 
        val.toString().toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.applyFilter(filterValue);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.applyFilter('');
  }
}