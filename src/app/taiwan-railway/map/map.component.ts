import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('mapDiv') mapDiv: ElementRef<HTMLDivElement> | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  private ngAfterViewInit(): void {
    if (this.mapDiv) {
      const mapView = map(this.mapDiv.nativeElement, {
        center: [24.156547, 120.712760],
        zoom: 12,
      });

      const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(mapView);
    }
  }

}
