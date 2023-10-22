import BookForm from "../components/BookForm";

function Home() {
  const handleBookClick = () => {
    document
      .querySelector("#book-car")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="home-section">
        <div className="container">
          <div className="home-text">
            <h1>
              <span className="orange-text">EASY</span> AND
              <span className="orange-text"> FAST</span> WAY TO RENT YOUR CAR
            </h1>
            <p className="home-subtitle">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="home-btn-container">
              <button onClick={handleBookClick} className="home-btn">Get Started</button>
              <button className="home-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <BookForm />
    </>
  );
}

export default Home;
