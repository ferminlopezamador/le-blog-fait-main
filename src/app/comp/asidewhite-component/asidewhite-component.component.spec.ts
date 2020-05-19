import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidewhiteComponentComponent } from './asidewhite-component.component';

describe('AsidewhiteComponentComponent', () => {
  let component: AsidewhiteComponentComponent;
  let fixture: ComponentFixture<AsidewhiteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidewhiteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidewhiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
