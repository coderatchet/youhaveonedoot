import { TestBed, inject } from '@angular/core/testing';

import { ShopService } from './shop.service';
import {StateService} from "./state.service";
import {DefaultSpys} from "../test/mocks";

describe('ShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopService,{
        provide: StateService, useValue: DefaultSpys.stateService
      }]
    });
  });

  it('should be created', inject([ShopService], (service: ShopService) => {
    expect(service).toBeTruthy();
  }));
});
