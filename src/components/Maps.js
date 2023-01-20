import { useMemo,useState, useRef, useCallback } from "react";
import './Maps.css';
import { GoogleMap, useLoadScript, Marker, Circle } from "@react-google-maps/api";



const Maps = ()=> {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}


// const _drawCircle = ()=>{
//   if(!circle){
//     circle = new google.maps.Circle({
//       strokeColor:selectedColor,
//       strokeWeight:device.mobile?12:6,
//       fillColor:"transparent",
//       fillOpacity:.1,
//       map:map,
//       center:map.getCenter(),
//       radius: estimationStore.state.areaRadius *1000,
//       visible: extimationsStore.state.isCalcByCircle,
//       editable:true,
//       draggable:true,
//       clickable:false,
//       zIndex:2,
//     })

//     _radiusChangeListener = google.maps.event.addListener(circle, 'radius_changed', onRadiusChanged)

//     google.maps.event.addListener(circle, "center_changed", async()={
//       Marker.setOptions({
//         position: circle.center,
//       })
//       onCenterMoved()
//     })
//   } else{
//     circle.center = _center;
//   }

//   circle.setOptions({
//     visible: estimationStore.state.isCalcByCircle
//   })
// }

function Map() {
  // const mapRef = useRef<GoogleMap>(); 
  
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
      <Circle position={center}/>
    </GoogleMap>
  );
}
export default Maps;