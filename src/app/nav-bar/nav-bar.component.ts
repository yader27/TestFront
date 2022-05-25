import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() menuOptions?: Array<any>;

  @Output()
  nextProperti: EventEmitter<any> = new EventEmitter<any>()


  constructor() {
    //this.menuOptions = {}
  }

  ngOnInit(): void {
  }

  next(){
    this.nextProperti.emit('')
  }

}
