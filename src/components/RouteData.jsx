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
          <li>Days to travel the route: {Math.ceil(distance / 800000)}</li>
          <li>Distance: {Math.floor(distance / 1000)} km</li>
          <li>
            Total price:
            {Math.ceil(
              1.1 *
                (Number(price) * Math.floor(distance / 1000) +
                  Math.ceil(distance / 800000) * 1000)
            )}{" "}
            zł
          </li>
        </ul>
      </div>
    );
  }
}

export default RouteData;
