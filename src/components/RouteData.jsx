import { Component } from "react";

class RouteData extends Component {
  render() {
    const { directions, price, duration, distance } = this.props;
    return (
      <div>
        <p className="map-display-box--ul-title">Route data:</p>
        <ul>
          <li>Origin: {directions.origin}</li>
          <li>Destination: {directions.destination}</li>
          <li>Duration: {duration}</li>
          <li>
            Days to travel the route:{" "}
            {Math.ceil(parseInt(distance.split(" ")[0]) / 800)}
          </li>
          <li>Distance: {distance}</li>
          <li>
            Total price:{" "}
            {Math.round(
              (1.1 *
                (parseInt(price) * parseInt(distance.split(" ")[0]) +
                  Math.ceil(parseInt(distance.split(" ")[0]) / 800) * 1000) +
                Number.EPSILON) *
                100
            ) / 100}{" "}
            zł
          </li>
        </ul>
      </div>
    );
  }
}

export default RouteData;
