function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content-wrapper">
            <img
              src="src/assets/images/about_image.jpg"
              alt=""
              className="about-section-img"
            />
            <div>
              <div className="title">
                <h3>About our Company</h3>
                <h1>You start the engine and your adventure begins</h1>
                <p>
                  Certain but she but shyness why cottage. Guy the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you. Weeks quiet do vexed or whose. Motionless
                  if no to aggronting imprudence no precaution. My indulged as
                  disposal strongly attended
                </p>
              </div>
              <div className="about-flex-container">
                <div className="about-flex-item">
                  <div className="about-img-container">
                    <img src="src/assets/images/transportation.png" alt="" />
                  </div>
                  <div className="about-item-info">
                    <h1>20</h1>
                    <h3>Car Types</h3>
                  </div>
                </div>
                <div className="about-flex-item">
                  <div className="about-img-container">
                    <img src="src/assets/images/car.png" alt="" />
                  </div>
                  <div className="about-item-info">
                    <h1>85</h1>
                    <h3>Rental Outlets</h3>
                  </div>
                </div>
                <div className="about-flex-item">
                  <div className="about-img-container">
                    <img src="src/assets/images/parking.png" alt="" />
                  </div>
                  <div className="about-item-info">
                    <h1>75</h1>
                    <h3>Repair Shop</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
