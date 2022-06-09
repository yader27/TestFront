import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export  class MapComponent implements OnInit {
  @Input() location?: any;
  map:any

  constructor() { }

  ngOnInit(): void {
    this.loadMap(this.location)
  }

  loadMap(location:any){
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: Number(location.latitude), lng: Number(location.longitude) },
      zoom: 8,
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('HOLAAAAAAAAAAAAAAA',this.location)

    this.loadMap(this.location);
  }

}



