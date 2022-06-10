
let map;
let centro = { lat: -6.891900888522654, lng: -38.54913574095965 }
let marker;
let info;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 14,
    zoomControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  })


  marker = new google.maps.Marker({
    position: centro,
    map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE 
  });

  marker.addListener("dblclick", ()=>{
    info = new google.maps.InfoWindow({
      content: ""+marker.getPosition(),
    }).open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  map.addListener("click", (evt)=>{
    marker.setPosition(evt.latLng);
    console.log(evt.latLng)
  });

}

window.initMap = initMap;

