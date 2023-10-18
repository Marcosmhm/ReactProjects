import vehicles from "../data/vehicles.js";

function CarCard({ filter }) {
  const renderVehicles = vehicles
    .filter((vehicle) => {
      return filter === "all"
        ? vehicle
        : vehicle.transmission.toLowerCase() === filter.toLowerCase();
    })
    .map((vehicle, index) => {
      return (
        <div className="car-card" key={vehicle.make - index}>
          <img src={vehicle.image_url} alt="" />
          <h3>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
        </div>
      );
    });

  return <>{renderVehicles}</>;
}

export default CarCard;
