import { FcCustomerSupport, FcCurrencyExchange, FcApproval } from 'react-icons/fc'

function WhyUs() {
  return (
    <>
      <section id="why">
        <div className="container">
          <h1 className="title">
            WHY <span className="orange-text">CHOOSE US</span>
          </h1>
          <div className="why-container">
            <img
              src="src/assets/images/pexels-mike-bird-1035108-removebg-preview.png"
              alt=""
            />
            <div className="why-cards-cotainer">
              <div className="flex-card">
                <FcCustomerSupport size={64} />
                <h3>Customer Support</h3>
                <p>
                  Our dedicated customer support team is here to assist you at
                  any time. We strive to provide you with exceptional service
                  and quick resolutions to your inquiries. Your satisfaction is
                  our top priority.
                </p>
              </div>
              <div className="flex-card">
                <FcCurrencyExchange size={64} />
                <h3>Best Price</h3>
                <p>
                  We guarantee the best prices for our rental vehicles. Our
                  transparent pricing and cost-effective options ensure that you
                  get the most value for your money without compromising on
                  quality.
                </p>
              </div>
              <div className="flex-card">
                <FcApproval size={64} />
                <h3>Verified Car Brand</h3>
                <p>
                  Choose from a wide range of well-maintained and verified car
                  brands. We offer vehicles from trusted manufacturers to ensure
                  a safe and enjoyable driving experience for our customers.
                </p>
              </div>
              <div className="flex-card">
                <h3>Free Cancellation</h3>
                <p>
                  We understand plans may change. Enjoy the freedom of canceling
                  your reservation at no cost. We believe in providing
                  flexibility to our customers for a stress-free booking
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
