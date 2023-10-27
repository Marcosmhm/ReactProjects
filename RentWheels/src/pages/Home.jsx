import BookForm from "../components/BookForm";

import { handleClickScroll } from "../utils";

function Home() {


  return (
    <>
      <section id="home" className="home-section">
        <div className="container">
          <div className="home-content">
            <h1>
              <span className="orange-text">EASY</span> AND
              <span className="orange-text"> FAST</span> WAY TO RENT YOUR CAR
            </h1>
            <p className="home-subtitle">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="home-btn-container">
              <button onClick={() => handleClickScroll('book-car')} className="home-btn book-car">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>
      <BookForm />
    </>
  );
}

export default Home;
