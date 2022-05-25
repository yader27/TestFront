import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.scss']
})
export class TabCardComponent implements OnInit {

  showTab = 'imagenes'
  constructor() { }

  ngOnInit(): void {
  }

}
