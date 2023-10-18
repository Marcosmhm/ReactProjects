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
        <div className="car-card" key={`${vehicle.make}-${index}`}>
          <div className="image-container">
            <img src={vehicle.image_url.toString()} alt="" />
          </div>
          <h3>
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
          <button>BOOK NOW</button>
        </div>
      );
    });

  return <>{renderVehicles}</>;
}

export default CarCard;
