import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgDirectivesComponent } from './eg-directives.component';

describe('EgDirectivesComponent', () => {
  let component: EgDirectivesComponent;
  let fixture: ComponentFixture<EgDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
