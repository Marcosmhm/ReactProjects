import { useState } from "react";
import vehicles from "../data/vehicles.js";

function CarCard({ filter }) {
  const [vehicleData, setVehicleData] = useState([{}]);

  const handleVehicleClick = (id) => {
    const newData = vehicles.filter((vehicle) => vehicle.id === id)[0];
    console.log(newData);
    setVehicleData(newData);
    console.log("oi", vehicleData);
  };

  const renderVehicles = vehicles
    .filter((vehicle) => {
      return filter === "all"
        ? vehicle
        : vehicle.transmission.toLowerCase() === filter.toLowerCase();
    })
    .map((vehicle, index) => {
      return (
        <div className="car-div" onClick={() => handleVehicleClick(vehicle.id)}>
          {vehicle.name}
        </div>
      );
    });

  const renderVehicleInfo = (
    <>
      <div className="selected-vehicle">
        <div className="image-container">
          <img src={vehicleData.image_url} alt="" />
        </div>
        <div className="selected-vehicle-price">
          ${vehicleData.price_per_day} / Per day
        </div>
        <ul>
          <li>
            <span className="list-title">Model</span>
            <span className="list-content">{vehicleData.model}</span>
          </li>
          <li>
            <span className="list-title">Make</span>
            <span className="list-content">{vehicleData.make}</span>
          </li>
          <li>
            <span className="list-title">Year</span>
            <span className="list-content">{vehicleData.year}</span>
          </li>
          <li>
            <span className="list-title">Seats</span>
            <span className="list-content">{vehicleData.seats}</span>
          </li>
          <li>
            <span className="list-title">Transmission</span>
            <span className="list-content">{vehicleData.transmission}</span>
          </li>
          <li>
            <span className="list-title">Type</span>
            <span className="list-content">{vehicleData.type}</span>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      {renderVehicles}
      {renderVehicleInfo}
    </>
  );
}

export default CarCard;
