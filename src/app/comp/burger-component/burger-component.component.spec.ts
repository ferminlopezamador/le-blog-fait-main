import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerComponentComponent } from './burger-component.component';

describe('BurgerComponentComponent', () => {
  let component: BurgerComponentComponent;
  let fixture: ComponentFixture<BurgerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
