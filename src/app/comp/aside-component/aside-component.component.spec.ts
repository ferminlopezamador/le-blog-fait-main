import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponentComponent } from './aside-component.component';

describe('AsideComponentComponent', () => {
  let component: AsideComponentComponent;
  let fixture: ComponentFixture<AsideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
