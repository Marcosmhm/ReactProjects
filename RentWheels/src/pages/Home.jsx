import BookForm from "../components/BookForm";

import { handleClickScroll } from "../utils";

function Home() {


  return (
    <>
      <section id="home" className="home-section">
        <div className="container">
          <img src="/src/assets/images/home-bg2.png" alt="" className="bg-shape" />
          <div className="home-content">
            <h4>Plan your trip now</h4>
            <h1>
              <span className="orange-text">EASY</span> AND
              <span className="orange-text"> FAST</span> WAY TO RENT YOUR CAR
            </h1>
            <p className="home-subtitle">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="home-btn-container">
              <button onClick={() => handleClickScroll('book-car')} className="home-btn book-car">Get Started</button>
            </div>
          </div>
        </div>
        <img src="/src/assets/images/red-car.png" alt="" className="home-img" />
      </section>
      <BookForm />
    </>
  );
}

export default Home;
