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
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v9',
       zoom: 0
   });

   var url = 'https://wanderdrone.appspot.com/';
   map.on('load', function () {
       window.setInterval(function() {
           map.getSource('movement').setData(url);
       }, 50);

       map.loadImage('../assets/icon/bus-top-view.png', function(error, image) {
         if (error) throw error;
       map.addSource('movement', { type: 'geojson', data: url });
       console.log(map)
       map.addImage('bus', image);
       map.addLayer({
           "id": "movement",
           "type": "symbol",
           "source": "movement",
           "layout": {
               "icon-image": "bus",
               "icon-size": 0.15

           }
       });
   });
 });

}

}
