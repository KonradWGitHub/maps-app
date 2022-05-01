export const ACTIONS = {
  SUBMIT_DIRECTIONS: "submit-direction",
  ADD_TO_HISTORY: "add-to-history",
  SET_DIRECTIONS_SERVICE_RESPONSE: "set-directions-service-response",
  DIRECTIONS_SERVICE_ERROR: "error",
  SET_HISTORY_TOGGLE: "set-history-toggle",
  SET_PRICE: "set-price",
};

export const initialState = {
  directions: { origin: "", destination: "" },
  center: { lat: 50.0619474, lng: 19.9368564 },
  distance: "",
  duration: 0,
  directionsResponse: null,
  history: [],
  directionsResponseError: false,
  directionsServiceToggle: false,
  historyToggle: false,
  price: 0,
};

const MapReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SUBMIT_DIRECTIONS: {
      return {
        ...state,
        directions: action.directions,
        directionsServiceToggle: true,
      };
    }
    case ACTIONS.ADD_TO_HISTORY: {
      const historyArray = [...state.history];
      if (historyArray.length === 0) historyArray.push(action.directions);
      else if (
        historyArray.every(
          (item) =>
            item.origin !== action.directions.origin ||
            item.destination !== action.directions.destination
        )
      )
        historyArray.push(action.directions);
      return {
        ...state,
        history: historyArray,
      };
    }
    case ACTIONS.SET_DIRECTIONS_SERVICE_RESPONSE: {
      return {
        ...state,
        directionsResponse: action.directionsResponse,
        distance: action.distance,
        duration: action.duration,
        directionsServiceToggle: false,
        directionsResponseError: false,
      };
    }
    case ACTIONS.DIRECTIONS_SERVICE_ERROR: {
      return {
        ...state,
        directionsResponseError: true,
        directionsServiceToggle: false,
      };
    }
    case ACTIONS.SET_HISTORY_TOGGLE: {
      return {
        ...state,
        historyToggle: !state.historyToggle,
      };
    }
    case ACTIONS.SET_PRICE: {
      return {
        ...state,
        price: action.price,
      };
    }
    default:
      return state;
  }
};

export default MapReducer;
