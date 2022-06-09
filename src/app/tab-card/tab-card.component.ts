import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PropertiesService } from '../properties.service'
@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.scss'],
})
export class TabCardComponent implements OnInit {
  @Input() id?: string;
  @Input() location?: any;

  showTab = 'imagenes';
  images : string[] = []
  constructor(private properti: PropertiesService) {}

  ngOnInit(): void {
    this.getPropertiImg();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('sad', this.location)
    this.getPropertiImg();
  }

  getPropertiImg() {
    try {
      if(this.id != undefined)
      this.properti.getPropertiesImg(this.id).subscribe((data:any) => {
        this.images = data.images
      })
    } catch (error) {
      console.log(error);
    }
  }
}
