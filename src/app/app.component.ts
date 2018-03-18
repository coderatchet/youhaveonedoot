import {Component, OnInit} from '@angular/core';
// import {EngineService} from "./engine.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(/*private engineService: EngineService*/) {
    console.log("constructing App component.");
  }

  ngOnInit(): void {
    console.log("init App component.");
    // this.engineService.start();
  }
}
