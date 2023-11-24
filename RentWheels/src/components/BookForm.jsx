import { useState } from "react";

import vehicles from "../data/vehicles.js";
import { AiOutlineCar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";
import BookModal from "./BookModal.jsx";

function BookForm() {
  const [formData, setFormData] = useState({
    carType: "",
    pickUpLocation: "",
    dropOf: "",
    pickUpDate: "",
    dropOfDate: "",
  });
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAnyFieldEmpty, setIsAnyFieldEmpty] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkIfFieldsAreEmpty = Object.values(formData).some((value) => value === "");
    if (checkIfFieldsAreEmpty) {
      setIsAnyFieldEmpty(true) 
      setTimeout(() => {
        setIsAnyFieldEmpty(false) 
      }, 4000);
    } else {
      setIsBookModalOpen((prevState) => !prevState);
      document.body.style.overflow = "hidden";
    }
  };

  const errorElement = <>
    <div className="error-div">
      <span>All fields are Required</span>
    </div>
  </>

  return (
    <>
      <section id="book-car">
        <div className="container book-car-form-container">
          <h3>BOOK A CAR</h3>
          {isAnyFieldEmpty && errorElement}
          <form className="book-car-form" action="">
            <div className="book-car-input-container">
              <label htmlFor="">
                <AiOutlineCar /> Select Your Car Type
              </label>
              <select
                className="book-car-input"
                onChange={handleChange}
                name="carType"
                value={formData.carType}
              >
                <option value="" disabled>
                  Select your car type
                </option>
                {carTypeOptions}
              </select>
            </div>
            <div className="book-car-input-container">
              <label htmlFor="">
                <IoLocationOutline />
                Pick-up Location
              </label>
              <select name="pickUpLocation" id="" className="book-car-input" value={""} onChange={handleChange}>
                <option value="" disabled>
                  Select pick up location
                </option>
              </select>
            </div>
            <div className="book-car-input-container">
              <label htmlFor="">
                <IoLocationOutline /> Drop-of location
              </label>
              <select name="" id="" className="book-car-input" value={""} onChange={handleChange}>
                <option value="" disabled>
                  Select drop off location
                </option>
              </select>
            </div>
            <div className="book-car-input-container">
              <label htmlFor="">
                <MdOutlineEditCalendar />
                Pick-up Date
              </label>
              <input type="date" name="pickUpDate" id="" className="book-car-input" onChange={handleChange} />
            </div>
            <div className="book-car-input-container">
              <label htmlFor="">
                <MdOutlineEditCalendar />
                Drop-of Date
              </label>
              <input type="date" name="dropOfDate" id="" className="book-car-input" onChange={handleChange} />
            </div>
            <div className="book-car-input-container">
              <button
                type="submit"
                className="form-button book-car-input"
                onClick={(e) => handleSubmit(e)}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {isBookModalOpen && (
          <BookModal
            carModel={formData.carType}
            pickUpLocation={formData.pickUpLocation}
            dropOf={formData.dropOf}
            pickUpDate={formData.pickUpDate}
            dropOfDate={formData.dropOfDate}
          />
        )}
      </section>
    </>
  );
}

export default BookForm;
