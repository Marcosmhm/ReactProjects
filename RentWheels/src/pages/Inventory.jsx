import { Suspense, lazy, useState } from "react";
const CarCard = lazy(() => import("../components/CarCard"));

function Inventory() {
  const [filteredVehicle, setFilteredVehicle] = useState("all");

  const handleVehicleTypeClick = async (type) => {
    await setFilteredVehicle(type);
  };

  return (
    <>
      <section className="inventory-section"> 
        <div className="container">
        <h1 className="inventory-title">
          <span className="orange-text">LATEST</span> INVENTORY
        </h1>
          <div className="inventory-btn-container">
            <button className="inventory-btn" onClick={() => handleVehicleTypeClick("all")}>All</button>
            <button className="inventory-btn" onClick={() => handleVehicleTypeClick("manual")}>
              Manual
            </button>
            <button className="inventory-btn" onClick={() => handleVehicleTypeClick("automatic")}>
              Automatic
            </button>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <div className="cars-grid">
              <CarCard filter={filteredVehicle} />
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default Inventory;
