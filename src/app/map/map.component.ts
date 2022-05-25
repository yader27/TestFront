import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export  class MapComponent implements OnInit {


  map: any = google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 9.963122447765874, lng: -84.25809570397551 },
      zoom: 8,
    });
  }

}



