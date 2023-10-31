import { useState } from "react";

import vehicles from "../data/vehicles.js";
import { AiOutlineCar } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineEditCalendar } from 'react-icons/md'

function BookForm() {
  const [formData, setFormData] = useState({
    carType: "",
    pickUpLocation: "",
    dropOf: "",
    pickUpDate: "",
    dropOfDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const carTypeOptions = vehicles.map((vehicle, index) => {
    return (
      <option key={`option-${index}`} value={vehicle.name}>
        {vehicle.name}
      </option>
    );
  });

  return (
    <>
      <section id="book-car">
        <div className="container book-car-form-container">
          <h3>BOOK A CAR</h3>
          <form className="book-car-form" action="">
            <div className="book-car-input-container">
              <label htmlFor=""><AiOutlineCar /> Select Your Car Type</label>
              <select className="book-car-input"
                onChange={handleChange}
                name="carType"
                value={formData.carType}
              >
                <option value="" disabled >
                  Select your car type
                </option>
                {carTypeOptions}
              </select>
            </div>
            <div className="book-car-input-container">
              <label htmlFor=""><IoLocationOutline />Pick-up Location</label>
              <select name="" id="" className="book-car-input" value={''}>
                <option value='' disabled >
                  Select pick up location
                </option>
              </select>
            </div>
            <div className="book-car-input-container">
              <label htmlFor=""><IoLocationOutline /> Drop-of location</label>
              <select name="" id="" className="book-car-input" value={''}>
                <option value="" disabled>
                  Select drop off location
                </option>
              </select>
            </div>
            <div className="book-car-input-container">
              <label htmlFor=""><MdOutlineEditCalendar />Pick-up Date</label>
              <input type="date" name="" id="" className="book-car-input" />
            </div>
            <div className="book-car-input-container">
              <label htmlFor=""><MdOutlineEditCalendar />Drop-of Date</label>
              <input type="date" name="" id="" className="book-car-input" />
            </div>
            <div className="book-car-input-container">
              <button className="form-button book-car-input">Search</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default BookForm;
