import { FaCircleInfo } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";

function BookModal({ ...props }) {
  return (
    <>
      <section className="book-modal">
        <div className="book-modal-wrapper">
          <div className="book-modal-container">
            <h1>COMPLETE RESERVATION</h1>
            <div className="book-modal-content">
              <div className="book-info">
                <h3>
                  <FaCircleInfo /> Upon completing this reservation enquiry, you
                  will receive:
                </h3>
                <p>
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number
                </p>
              </div>
              <div className="booking-data">
                <div className="booking-left">
                  <h3>Location & Date</h3>
                  <div className="pickup-info">
                    <IoLocationOutline size={20} />
                    <div className="pickup-info-content">
                      <span>Pick-Up Date</span>
                      {props.pickUpDate.replaceAll("-", "/")}
                    </div>
                  </div>
                  <div className="pickup-info">
                    <IoLocationOutline size={20} />
                    <div className="pickup-info-content">
                      <span>Drop-Off Date</span>
                      {props.dropOfDate.replaceAll("-", "/")}
                    </div>
                  </div>
                  <div className="pickup-info">
                    <MdOutlineEditCalendar size={20} />
                    <div className="pickup-info-content">
                      <span>Pick-Up Location</span>
                      {props.pickUpLocation}
                    </div>
                  </div>
                  <div className="pickup-info">
                    <MdOutlineEditCalendar size={20} />
                    <div className="pickup-info-content">
                      <span>Drop-Off Location</span>
                      {props.dropOf}
                    </div>
                  </div>
                </div>
                <div className="booking-right">
                  <h3>Car: {props.carModel}</h3>
                </div>
              </div>
              <div className="booking-personal-form">
                <h3>PERSONAL INFORMATION</h3>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" id="last-name" placeholder="Enter your last name" />
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="Enter your phone number" />
                <label htmlFor="">Age</label>
                <input type="text" placeholder="18" />
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email address" />
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Enter your street address" />
                <label htmlFor="">City</label>
                <input type="text" placeholder="Enter your city" />
                <label htmlFor="">Zip code</label>
                <input type="text" placeholder="Enter your zip code" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookModal;
