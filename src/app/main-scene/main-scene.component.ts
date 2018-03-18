import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.scss']
})
export class MainSceneComponent implements OnInit {

  constructor() {
    console.log("constructing Main Scene component.");
  }

  ngOnInit() {
    console.log("init Main Scene component");
  }

}
