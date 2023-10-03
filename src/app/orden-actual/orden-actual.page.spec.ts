import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenActualPage } from './orden-actual.page';

describe('OrdenActualPage', () => {
  let component: OrdenActualPage;
  let fixture: ComponentFixture<OrdenActualPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdenActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
