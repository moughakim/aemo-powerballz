import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movement-details',
  templateUrl: './movement-details.component.html',
  styleUrl: './movement-details.component.scss'
})
export class MovementDetailsComponent {

  @Input() movement: any;
}
