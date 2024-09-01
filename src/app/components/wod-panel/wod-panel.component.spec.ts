import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WodPanelComponent } from './wod-panel.component';

describe('WodPanelComponent', () => {
  let component: WodPanelComponent;
  let fixture: ComponentFixture<WodPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WodPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WodPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
