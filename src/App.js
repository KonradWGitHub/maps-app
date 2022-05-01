import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import MapDisplayReducer, { initialState, ACTIONS } from "./reducer/mapReducer";
import Navbar from "./components/Navbar";
import Adress from "./components/Adress";
import MapDisplay from "./components/MapDisplay";

const LIBRARIES = ["places"];

function App() {
  const [state, dispatch] = useReducer(MapDisplayReducer, initialState);

  const onDirectionsService = (response, status) => {
    // console.log(response);
    console.log(status);
    if (status === "OK") {
      dispatch({
        type: ACTIONS.SET_DIRECTIONS_SERVICE_RESPONSE,
        duration: response.routes[0].legs[0].duration.text,
        distance: response.routes[0].legs[0].distance.value,
        directionsResponse: response,
      });
      dispatch({
        type: ACTIONS.ADD_TO_HISTORY,
        directions: {
          origin: response.request.origin.query,
          destination: response.request.destination.query,
          directionsResponse: response,
        },
      });
    } else dispatch({ type: ACTIONS.DIRECTIONS_SERVICE_ERROR });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Adress libraries={LIBRARIES} dispatch={dispatch} {...state} />
          }
        />
        <Route
          path="/map"
          element={
            <MapDisplay
              libraries={LIBRARIES}
              {...state}
              dispatch={dispatch}
              onDirectionsService={onDirectionsService}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
