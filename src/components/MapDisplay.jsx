import {
  GoogleMap,
  LoadScriptNext,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Alert } from "react-bootstrap";

import MapDisplayBox from "./MapDisplayBox";

const MapDisplay = (props) => {
  const {
    directionsResponse,
    libraries,
    center,
    directionsServiceToggle,
    onDirectionsService,
    directions,
    directionsResponseError,
  } = props;

  return (
    <div className="map-display">
      <LoadScriptNext
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={libraries}
      >
        <GoogleMap
          id="direction-example"
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "93vh" }}
          center={center}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {directionsServiceToggle && directions.origin !== "" && (
            <DirectionsService
              callback={onDirectionsService}
              options={{
                origin: directions.origin,
                destination: directions.destination,
                travelMode: "DRIVING",
              }}
            />
          )}
          {directionsResponseError && (
            <Alert key="danger" variant="danger" className="map-display--alert">
              Oh no! There was an error! Directions not found.
            </Alert>
          )}
          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              onLoad={(directionsRenderer) => {
                console.log("on mount:  ", directionsRenderer);
              }}
              onUnmount={() => console.log("on unmount")}
            />
          )}
          <MapDisplayBox {...props} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};

export default MapDisplay;
