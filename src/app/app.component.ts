import {Component, OnInit} from '@angular/core';
import {EngineService} from "./engine.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private engineService: EngineService) {
  }

  ngOnInit(): void {
    this.engineService.start();
  }
}
