import { FaCircleInfo } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";

function BookModal({ ...props }) {
  return (
    <>
      <section className="book-modal">
        <div className="book-modal-wrapper">
          <h1>COMPLETE RESERVATION</h1>
          <div className="book-modal-content">
            <div className="book-info">
              <h3>
                <FaCircleInfo size={24} /> Upon completing this reservation
                enquiry, you will receive:
              </h3>
              <p>
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number
              </p>
            </div>
            <div className="booking-data">
              <div className="booking-left">
                <h3>Location & Date</h3>
                <div className="pickup-info">
                  <IoLocationOutline size={20} />
                  <div className="pickup-info-content">
                    <span>Pick-Up Date</span>
                    {props.pickUpDate}
                  </div>
                </div>
                <div className="pickup-info">
                  <IoLocationOutline size={20} />
                  <div className="pickup-info-content">
                    <span>Drop-Off Date</span>
                    {props.dropOfDate}
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
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookModal;
