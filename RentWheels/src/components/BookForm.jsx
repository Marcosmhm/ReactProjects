import { useState } from "react";

function BookForm() {
  const [formData, setFormData] = useState({
    carType: "",
    pickUpLocation: "",
    dropOf: "",
    pickUpDate: "",
    dropOfDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : value
      }
    })
  }
  return ( 
     <>
      <form action="">
        <label htmlFor="">Select Your Car Type</label>
        <select name="carType" id="" value={formData.carType}>
          <option value="">test</option>
          <option value="">test</option>
          <option value="">test</option>
        </select>
      </form>
     </>
   );
}

export default BookForm;