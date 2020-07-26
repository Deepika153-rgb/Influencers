function updateMap()
{

fetch("/datas.json")
.then(response=>response.json())
.then(rsp=>
{
console.log(rsp.data)
rsp.data.forEach(element => {
    latitude=element.Latitude;
    longitude=element.Longnitute;

     color="rgb(255,0,0)"   

new mapboxgl.Marker({

     draggable:false,
     color:color
})
.setLngLat([longitude,latitude])
.addTo(map);




});
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
    );
})

}

updateMap();