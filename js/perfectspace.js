function initMap() {
  var MainLibrary = {lat: 56.341971, lng: -2.796073999999976};
  var locations = [
    ['MainLibrary', 56.341971, -2.796073999999976, 1],
    ['King James Library', 56.33938999999999, -2.794532000000004, 2],
    ['JF Allen Library', 56.3398131,-2.807177300000035, 3],
    ['The Richardson Research Library at Martyrs Kirk', 56.340937,-2.7943789999999353, 4],
    ['Bell Pettigrew Museum', 56.338097, -2.793821, 5],
    ['Old Union Cafe', 56.341393, -2.795280, 6],
    ['Rectors', 56.340284, -2.789361, 7],
    ['Pret', 56.340559, -2.796662, 8]];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: MainLibrary
  });

  var marker, i;
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}


async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm3b51A0WAksLYIAvcc_8u5WJW9Neq030&callback=initMap">
