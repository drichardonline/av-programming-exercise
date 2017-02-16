import { Component, OnInit } from '@angular/core';


// Declare google sdk library var for Typescript to recognize.
declare var google : any;

@Component({
  moduleId: module.id,
  selector: 'av-geolocation',
  templateUrl: 'geolocation.component.html',
  styleUrls: ['geolocation.component.css']
})

export class GeolocationComponent implements OnInit {


  ngOnInit() : void {
    this.initMap()
  }

  /**
   * Initialize the google map and load the location. This code is taken as is without modificaiton
   * from Google Maps API documentation.
   */
  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({map: map});
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  /** Error handler code. This is taken as is from Google Maps API documentation. */
  handleLocationError(browserHasGeolocation:boolean, infoWindow:any, pos:any) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

}