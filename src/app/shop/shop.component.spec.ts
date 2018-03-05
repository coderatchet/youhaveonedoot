import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShopComponent} from './shop.component';
import {DefaultSpys} from "../../test/mocks";
import {ShopService} from "../shop.service";

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: ShopService, useValue: DefaultSpys.shopService
      }],
      declarations: [ShopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
