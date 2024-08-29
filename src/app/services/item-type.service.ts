import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemTypeService {
  private itemTypeSource = new Subject<string>();
  itemType$ = this.itemTypeSource.asObservable();

  setItemType(itemType: string) {
    this.itemTypeSource.next(itemType);
  }
}
