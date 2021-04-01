'use strict';

(function () {

  function initMap() {
    var coordinates = {lat: 50.07217822752852, lng: 19.936265199425552},

      map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        disableDefaultUI: false
      }),

      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE
      });
  }

  initMap();
})();
