import { Component } from '@angular/core';
import { Wod } from '../../interfaces/wod';
import { ItemService } from '../../services/item.service';
import { ItemTypeService } from '../../services/item-type.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationHelper } from '../../shared/helpers/notification-helper';
import { Event } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-wod-panel',
  templateUrl: './wod-panel.component.html',
  styleUrl: './wod-panel.component.scss'
})

export class WodPanelComponent {

  constructor(
    private itemService: ItemService,
    private itemTypeService: ItemTypeService,
    private notificationHelper: NotificationHelper
  ) {}
 
  scaleExist: boolean = true;
  currentWod: any;
  filteredWods: Wod[] =[];

  searchSubject = new Subject<string>();
  selectedMovement: any = null;

  ngOnInit() {
    // Subscribe to item type changes
    this.itemTypeService.itemType$.subscribe(itemType => {
      this.loadItems(itemType);
    });

    this.loadItems('challenge');
    
    this.searchSubject.pipe(debounceTime(300)).subscribe((searchTerm) => {
      this.filteredWods = this.itemService.searchWodByName(searchTerm);
    });
  }

  loadItems(itemType: string|null): void {
    console.log('itemType', itemType);
    this.selectedMovement = null;
    switch (itemType) {
      case 'wod':
        this.scaleExist = true;
        break;

      default:
        this.currentWod = this.itemService.getRandomItem(itemType); 
        break;
    }
    this.currentWod = this.itemService.getRandomItem(itemType); 
  }

  displayWod(name: string, level: string): void {
    const wod = this.itemService.getWodByNameAndLevel(name, level);
    if (wod) {
        this.currentWod = wod;
        this.selectedMovement = null;
      }  else {
        this.scaleExist = false;
        this.showNotificationScaleVersionNotExist();
      }
  }

  showNotificationScaleVersionNotExist(): void {
    this.notificationHelper.showInfo('Scaled version of the wod is not available', 'Close');
  }

  refreshWod(): void {
    if (this.currentWod) {
      const wodType = this.currentWod.type;
      this.currentWod = this.itemService.getRandomWodByType(wodType);
      this.selectedMovement = null;
    }
  }

  onSearch(searchTerm: any): void {
    if (searchTerm) {
      this.searchSubject.next(searchTerm.target.value);
    } else {
      this.refreshWod(); // Show a random WOD if search is cleared
    }
  }

  selectWod(wod: Wod): void {
    this.currentWod = wod;
    this.filteredWods = [];
  }

  clearSearch(): void {
    this.filteredWods = [];
    // Refresh
        this.refreshWod();
  }

  displayMovementDetails(movement: any): void {
    this.selectedMovement = movement; // Set the selected movement
  }

  getParts(content: any[]) :any[]{
    const partsMap = content.reduce((acc, movement) => {
      const part = movement.part;
      if (!acc[part]) {
        acc[part] = { number: part, movements: [] };
      }
      acc[part].movements.push(movement);
      return acc;
    }, {});
  
    return Object.values(partsMap);
  }
  

}
