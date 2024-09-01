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

  loadWods(): void {
    this.itemTypeService.setItemType('wods');
  }

  loadChallenges(): void {
    this.itemTypeService.setItemType('challenges');
  }

  loadActiveRecovery(): void {
    this.itemTypeService.setItemType('activeRecovery');
  }

}
