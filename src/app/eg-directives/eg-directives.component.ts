import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eg-directives',
  templateUrl: './eg-directives.component.html',
  styleUrls: ['./eg-directives.component.css']
})
export class EgDirectivesComponent implements OnInit {

  state = true;
  counter : number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.state = !this.state;
    this.counter.push(this.counter.length + 1);
  }

}
