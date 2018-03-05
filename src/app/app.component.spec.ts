import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {EngineService} from './engine.service';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async(() => {
    const engineSpy = jasmine.createSpyObj('EngineService', ['start']);

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: EngineService, useValue: engineSpy
      }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
