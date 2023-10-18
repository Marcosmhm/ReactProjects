import { useState } from "react";
import CarCard from "../components/CarCard";

function Inventory() {
  const [filteredVehicle, setFilteredVehicle] = useState('all')

  const handleVehicleTypeClick = async (type) => {
    await setFilteredVehicle(type)
  }

  return (
    <>
      <div className="inventory-btn-container">
        <button onClick={() => handleVehicleTypeClick('all')}>All</button>
        <button onClick={() => handleVehicleTypeClick('manual')}>Manual</button>
        <button onClick={() => handleVehicleTypeClick('automatic')}>Automatic</button>
      </div>
      <CarCard filter={filteredVehicle} />
    </>
  );
}

export default Inventory;
