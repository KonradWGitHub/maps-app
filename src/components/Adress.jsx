import { useRef } from "react";
import { Link } from "react-router-dom";
import { Autocomplete, LoadScriptNext } from "@react-google-maps/api";

import History from "./History";
import { ACTIONS } from "../reducer/mapReducer";

const Adress = (props) => {
  let originRef = useRef();
  let destinationRef = useRef();
  const { libraries, dispatch, historyToggle } = props;

  return (
    <div className="adress-box">
      <form className="adress--form">
        <LoadScriptNext
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={libraries}
        >
          <Autocomplete>
            <input
              className="adress--input"
              name="directionA"
              placeholder="Origin"
              ref={originRef}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              className="adress--input"
              name="directionB"
              placeholder="Destination"
              ref={destinationRef}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Autocomplete>
          <Link
            to="/map"
            className="adress--link"
            onClick={() =>
              dispatch({
                type: ACTIONS.SUBMIT_DIRECTIONS,
                directions: {
                  origin: originRef.current.value,
                  destination: destinationRef.current.value,
                },
              })
            }
          >
            Show on map
          </Link>
        </LoadScriptNext>
      </form>
      <Link
        className="adress--link"
        to="/#"
        onClick={() => dispatch({ type: ACTIONS.SET_HISTORY_TOGGLE })}
      >
        {historyToggle ? "Hide history" : "Show history"}
      </Link>
      {historyToggle && <History {...props} />}
    </div>
  );
};

export default Adress;
