import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";


function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Você está aqui!</Popup>
      </Marker>
    );
  }
  

  export default LocationMarker;