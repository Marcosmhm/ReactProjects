function About() {
  return (
    <>
      <section id="about">
        <div className="container">
            <h1 className="title orange-text">ABOUT US</h1>
          <div className="our-container">
            <div className="flex-card story">
              <h3>Our Story</h3>
              <p>
                Our story began with a vision to revolutionize the way people
                travel. We started with a belief that renting a car should be
                convenient, reliable, and affordable. Over the years, we have
                grown, but our core values remain the same - customer-centricity
                and innovation.
              </p>
            </div>
            <div className="flex-card approach">
              <h3>Our Approach</h3>
              <p>
                our approach is simple - to provide you with a seamless and
                enjoyable rental experience. We focus on offering a diverse
                fleet of vehicles, transparent pricing, and exceptional customer
                service. Your satisfaction is our measure of success
              </p>
            </div>
            <div className="flex-card mission">
              <h3>Our Mission</h3>
              <p>
                Our mission is to empower you with the freedom to explore and
                make your journey unforgettable. We strive to create a world
                where renting a car is as easy as a few clicks, and where every
                trip is an adventure. Join us in this mission and let's drive
                towards a brighter future, together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
