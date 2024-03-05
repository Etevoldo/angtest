import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtEntryComponent } from './art-entry.component';

describe('ArtEntryComponent', () => {
  let component: ArtEntryComponent;
  let fixture: ComponentFixture<ArtEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
