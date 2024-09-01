import { Component } from '@angular/core';
import { Wod } from '../../interfaces/wod';
import { ItemService } from '../../services/item.service';
import { ItemTypeService } from '../../services/item-type.service';

@Component({
  selector: 'app-wod-panel',
  templateUrl: './wod-panel.component.html',
  styleUrl: './wod-panel.component.scss'
})

export class WodPanelComponent {

  constructor(
    private itemService: ItemService,
    private itemTypeService: ItemTypeService
  ) {}
 
  currentWod: any;

  ngOnInit() {
    // Subscribe to item type changes
    this.itemTypeService.itemType$.subscribe(itemType => {
      this.loadItems(itemType);
    });

    this.loadItems(null);
    //  this.currentWod = this.getRandomWod();
     // this.currentWod = this.itemService.getRandomChallenge();
  }

  loadItems(itemType: string|null): void {
    switch (itemType) {
      case 'wods':
        this.currentWod = this.itemService.getRandomWod(); 
        break;
      case 'challenges':
        this.currentWod = this.itemService.getRandomChallenge();
        break;
      case 'activeRecovery':
        this.currentWod = this.itemService.getRandomActiveRecovery();
        break;
      default:
        this.currentWod = this.itemService.getRandomWod(); 
        // this.currentWod = this.itemService.getRandomChallenge();
        break;
    }

  }

  displayWod(name: string, level: string): void {
    this.currentWod = this.itemService.getWodByNameAndLevel(name, level);
  }


}
