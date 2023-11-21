function Footer() {
  return ( 
    <>
      <footer>
        <div className="container">
          <div className="footer-flex-wrapper">
            <ul>
              <li className="footer-list-title">Rent Wheels</li>
              <li>We provide a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
              <li>(123)-456-789</li>
              <li>RentWheels@gmail.com</li>
              <li>Design by XpeedStudio</li>
            </ul>
            <ul>
              <li className="footer-list-title">Company</li>
              <li>New York</li>
              <li>Careers</li>
              <li>Mobile</li>
              <li>Blog</li>
              <li>How we work</li>
            </ul>
            <ul>
              <li className="footer-list-title">Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>
            <ul>
              <li className="footer-list-title">Subscription</li>
              <li>Subscribe your Email address for latest news & updates</li>
              <li>
                <input type="email" name="email" id="" />
              </li>
              <li>
                <button type="submit">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
   );
}

export default Footer;