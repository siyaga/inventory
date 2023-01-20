import React, { useEffect, useState, useRef } from "react";
import './Maps.css';
import { GoogleMap, useJsApiLoader, Marker, Circle, useGoogleMap, MarkerClustererF } from "@react-google-maps/api";


const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

 

  
  function GoogleMaps() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    const [lat, setLat] = useState(-3.745);
    const [lng, seLng] = useState(-38.523);
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: lat, lng : lng }}
          zoom={2}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        <Marker

                position={{ lat: lat, lng : lng }}
              />
         <Circle
         options={{ fillColor: "#EE80AE33", strokeColor: "#EE80AE66" }}
         center={center}
         radius={100}
         

         />
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(GoogleMaps)