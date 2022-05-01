import { Link } from "react-router-dom";
import { ACTIONS } from "../reducer/mapReducer";

const HistoryLink = (props) => {
  const { origin, destination, dispatch } = props;

  return (
    <Link
      to="/map"
      className="history--link"
      onClick={() =>
        dispatch({
          type: ACTIONS.SUBMIT_DIRECTIONS,
          directions: { origin: origin, destination: destination },
        })
      }
    >
      {origin} - {destination}
    </Link>
  );
};

export default HistoryLink;
