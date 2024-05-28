import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "99%",
  height: "700px",
  margin: "0 auto",
  marginBottom: "20px",
};

const destination = {
  lat: -1.036554,
  lng: 37.072675,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBx5X1ntaB6muUWiLbLEGMzdny96JWz-yk",
  });

  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        calculateRoute(origin, destination);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const calculateRoute = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={destination}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF position={destination} />
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
