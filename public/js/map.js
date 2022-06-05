
// Basemap layer
let basemaplayer = new ol.layer.Tile({
  //source: new ol.source.Stamen({
  //  layer:'terrain'
  //})
  source: new ol.source.OSM()
})


// Array de layers
let arraylayers = [basemaplayer]

// View
let view = new ol.View({
  center: [-550274346378.3019, -768631.7673850602],
  zoom: 14
})

let map = new ol.Map({
    target: 'map',
    layers: arraylayers,
    view: view
});


// Definindo um  source
let drawSource = new ol.source.Vector()

// Definindo um layer
let drawLayer = new ol.layer.Vector({
    source:drawSource
})
// Adicionando no mapa
map.addLayer(drawLayer)


// Initiate a draw interaction
let draw = new ol.interaction.Draw({
  type : 'Point',
  source:drawSource
})


draw.on('drawstart', function(evt){
  drawSource.clear()
})
draw.on('drawend',function(evt){
  // alert('point is added')
  console.log('clicou em:', evt.feature.getGeometry().getFlatCoordinates()    )
  map.removeInteraction(draw)
})


// Function that enables draw interaction

function startDrawing(){
  //add interaction to the map
  map.addInteraction(draw)
}