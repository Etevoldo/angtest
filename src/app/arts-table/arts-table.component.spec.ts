import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsTableComponent } from './arts-table.component';

describe('ArtsTableComponent', () => {
  let component: ArtsTableComponent;
  let fixture: ComponentFixture<ArtsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
