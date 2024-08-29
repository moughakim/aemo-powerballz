import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aemo-opcr';
  
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `shopping_cart`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/shopping_cart.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `inventory`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/inventory.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `people`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/people.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `book_online`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/book_online.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `settings`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/settings.svg`)
    );
  }
}
