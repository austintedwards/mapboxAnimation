import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {

   /*Initializing Map*/
  mapboxgl.accessToken = '<your mapbox gl js access token>';
  var map = new mapboxgl.Map({
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-74.0066, 40.7135],
  zoom: 16,
  pitch: 80,
  minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
  maxZoom: 17,
  container: 'map'
});

}

}
