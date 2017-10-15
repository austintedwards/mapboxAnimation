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
   const ACCESS_TOKEN = 'pk.eyJ1IjoiYXVzdGtlIiwiYSI6ImNpd21uZTB1bDAwNm8yenF4ZmtlbjkzenUifQ.CohFKxWoYGrFXQDoRvZWag';
   mapboxgl.accessToken = ACCESS_TOKEN;
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
