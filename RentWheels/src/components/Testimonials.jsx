function Testimonials() {
  return (
    <>
      <section id="testimonial-section">
        <div className="container">
          <div className="title">
            <h3>Review by People</h3>
            <h1>Client's Testimonials</h1>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="testimonial-flex-container">
            <div className="flex-card">
              <p>
                The car was in great condition and made our trip even better.
                Highly recommend for this car rental website!.
              </p>
              <div className="testimonial-profile">
                <img src="src/assets/images/portrait_1.avif" alt="" />
                <div className="profile-info">
                  <span>Michael Douglas</span>
                  <span>Brazil</span>
                </div>
              </div>
            </div>
            <div className="flex-card">
              <p>
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
              </p>
              <div className="testimonial-profile">
                <img src="src/assets/images/portrait_2.avif" alt="" />
                <div className="profile-info">
                  <span>Minshuga Tomoyado</span>
                  <span>Japan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;