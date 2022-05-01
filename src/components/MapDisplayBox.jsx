import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { ACTIONS } from "../reducer/mapReducer";
import RouteData from "./RouteData";

const MapDisplayBox = (props) => {
  const [inputPrice, setPrice] = useState("");
  let priceRef = useRef(null);
  let componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { dispatch } = props;

  const handleOnChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="map-display-box">
      <form className="map-display-box--form">
        <label htmlFor="price" className="map-display-box--input-label">
          Set price for one km $
        </label>
        <input
          type="number"
          className="map-display-box--input"
          placeholder="Price for one km"
          name="price"
          value={inputPrice}
          onChange={handleOnChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              dispatch({ type: ACTIONS.SET_PRICE, price: inputPrice });
              priceRef.current.blur();
            }
          }}
          ref={priceRef}
          autoComplete="off"
        />
      </form>
      <RouteData ref={componentRef} {...props} />
      <button onClick={handlePrint} className="map-display-box--btn">
        Print to PDF
      </button>
    </div>
  );
};

export default MapDisplayBox;
