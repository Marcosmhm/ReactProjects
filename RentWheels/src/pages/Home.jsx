import BookForm from "../components/BookForm";

function Home() {
  const handleBookClick = () => {
    const id = 'book-car';
    const yOffset = -70; 
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
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
              <button onClick={handleBookClick} className="home-btn">GET STARTED</button>
            </div>
          </div>
        </div>
      </section>
      <BookForm />
    </>
  );
}

export default Home;
