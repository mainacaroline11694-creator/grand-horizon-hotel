import { useState } from "react";
import "./App.css";

function App() {

  const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");
const [guests, setGuests] = useState("1 Guest");
const [bookingMessage, setBookingMessage] = useState("");

const today = new Date().toISOString().split("T")[0];

const handleBooking = () => {
  if (!checkIn || !checkOut) {
    setBookingMessage("Please select both check-in and check-out dates.");
    return;
  }

  if (checkIn < today) {
    setBookingMessage("Check-in date cannot be in the past.");
    return;
  }

  if (checkOut <= checkIn) {
    setBookingMessage("Check-out must be after check-in.");
    return;
  }

  setBookingMessage(
    `Booking search submitted! Check-in: ${checkIn}, Check-out: ${checkOut}, Guests: ${guests}.`
  );
};
  return (
    <div className="hotel-website">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          <div>
            <h2>GRAND HORIZON</h2>
            <span className="logo-subtitle">HOTEL & RESORT</span>
          </div>
        </div>

       <nav>
  <a href="#home">Home</a>
  <a href="#rooms">Rooms</a>
  <a href="#about">About</a>
  <a href="#facilities">Facilities</a>
  <a href="#gallery">Gallery</a>
  <a href="#contact">Contact</a>
</nav>

        <a href="#booking" className="nav-book">
          Book Now
        </a>
      </header>
      
      {/* ROOMS SECTION */}
      <section className="rooms-section" id="rooms">
        <div className="rooms-heading">
          <p className="section-label">ACCOMMODATION</p>
          <h2>Our Rooms & Suites</h2>
          <p>
            Discover exceptional comfort and timeless elegance.
            Choose the perfect room for your stay.
          </p>
        </div>

        <div className="rooms-container">
          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80"
              alt="Deluxe hotel room"
            />

            <div className="room-info">
              <h3>Deluxe Room</h3>
              <p>
                A beautifully designed room offering comfort,
                relaxation and elegant interiors.
              </p>

              <div className="room-bottom">
                <span className="room-price">$120 <small>/ night</small></span>
                <a href="#booking" className="room-button">Book Now</a>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
              alt="Executive hotel suite"
            />

            <div className="room-info">
              <h3>Executive Suite</h3>
              <p>
                Experience extra space, refined comfort and
                premium amenities.
              </p>

              <div className="room-bottom">
                <span className="room-price">$220 <small>/ night</small></span>
                <a href="#booking" className="room-button">Book Now</a>
              </div>
            </div>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
              alt="Presidential luxury suite"
            />

            <div className="room-info">
              <h3>Presidential Suite</h3>
              <p>
                The ultimate luxury experience with sophistication
                and extraordinary comfort.
              </p>

              <div className="room-bottom">
                <span className="room-price">$350 <small>/ night</small></span>
                <a href="#booking" className="room-button">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FACILITIES SECTION */}
      <section className="facilities-section" id="facilities">
        <div className="facilities-heading">
          <p className="section-label">EXPERIENCE MORE</p>
          <h2>Our Facilities & Amenities</h2>
          <p>
            Enjoy exceptional services and world-class facilities
            designed to make every moment memorable.
          </p>
        </div>

        <div className="facilities-container">

          <div className="facility-card">
            <div className="facility-icon">🏊</div>
            <h3>Swimming Pool</h3>
            <p>
              Relax and unwind in our beautiful swimming pool
              surrounded by a peaceful atmosphere.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🍽️</div>
            <h3>Fine Dining</h3>
            <p>
              Enjoy delicious meals prepared by our professional
              chefs using fresh ingredients.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">💆</div>
            <h3>Luxury Spa</h3>
            <p>
              Refresh your body and mind with our relaxing
              spa treatments and wellness services.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">🏋️</div>
            <h3>Fitness Centre</h3>
            <p>
              Stay active with our modern gym equipment
              and comfortable workout environment.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">💼</div>
            <h3>Conference Rooms</h3>
            <p>
              Host successful meetings and events in our
              elegant and fully equipped conference spaces.
            </p>
          </div>

          <div className="facility-card">
            <div className="facility-icon">📶</div>
            <h3>Free Wi-Fi</h3>
            <p>
              Stay connected with complimentary high-speed
              internet throughout the hotel.
            </p>
          </div>

        </div>
      </section>
      
      {/* PHOTO GALLERY SECTION */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <p className="section-label">OUR GALLERY</p>
          <h2>Discover Our Beautiful Spaces</h2>
          <p>
            Take a glimpse into the luxury, comfort and
            unforgettable experiences waiting for you.
          </p>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
              alt="Luxury hotel exterior"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900"
              alt="Beautiful hotel swimming pool"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900"
              alt="Luxury hotel bedroom"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"
              alt="Elegant hotel restaurant"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
              alt="Elegant hotel lounge"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900"
              alt="Luxury resort"
            />
          </div>
        </div>
      </section>
     
<section className="contact-section" id="contact">
  <div className="contact-heading">
    <p className="section-label">GET IN TOUCH</p>
    <h2>We Would Love to Hear From You</h2>
    <p>
      Have a question or need assistance? Send us a message
      and our team will be happy to help.
    </p>
  </div>

  <div className="contact-container">
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>We are always ready to assist you with your stay.</p>

      <div className="contact-detail">
        <span>📍</span>
        <div>
          <h4>Our Location</h4>
          <p>Your hotel address goes here</p>
        </div>
      </div>

      <div className="contact-detail">
        <span>📞</span>
        <div>
          <h4>Phone Number</h4>
          <p>+254 700 000 000</p>
        </div>
      </div>

      <div className="contact-detail">
        <span>✉️</span>
        <div>
          <h4>Email Address</h4>
          <p>info@grandhorizonhotel.com</p>
        </div>
      </div>
    </div>

    <form className="contact-form">
      <div className="form-row">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
      </div>

      <input type="text" placeholder="Subject" required />

      <textarea
        placeholder="Write your message here..."
        rows="6"
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO GRAND HORIZON</p>

          <h1>
            Experience Luxury.
            <br />
            <span>Discover Serenity.</span>
          </h1>

          <p className="hero-description">
            Where elegance meets comfort. Experience exceptional
            hospitality and unforgettable moments.
          </p>

          <div className="hero-buttons">
            <a href="#rooms" className="gold-button">
              Explore Our Rooms
            </a>

            <a href="#about" className="outline-button">
              Discover More
            </a>
          </div>
        </div>
      </section>

      
<section className="booking-section" id="booking">
  <div className="booking-item">
    <label>CHECK IN</label>
    <input
      type="date"
      min={today}
      value={checkIn}
      onChange={(e) => setCheckIn(e.target.value)}
    />
  </div>

  <div className="booking-item">
    <label>CHECK OUT</label>
    <input
      type="date"
      min={checkIn || today}
      value={checkOut}
      onChange={(e) => setCheckOut(e.target.value)}
    />
  </div>

  <div className="booking-item">
    <label>GUESTS</label>
    <select
      value={guests}
      onChange={(e) => setGuests(e.target.value)}
    >
      <option>1 Guest</option>
      <option>2 Guests</option>
      <option>3 Guests</option>
      <option>4 Guests</option>
      <option>5+ Guests</option>
    </select>
  </div>

  <button
    className="booking-button"
    onClick={handleBooking}
  >
    Check Availability
  </button>

  {bookingMessage && (
    <p className="booking-message" role="status">
      {bookingMessage}
    </p>
  )}
</section>


      <section className="welcome-section" id="about">
        <p className="section-label">THE GRAND EXPERIENCE</p>
        <h2>Welcome to Grand Horizon Hotel</h2>
        <p>
          Discover a world of comfort, elegance and exceptional
          hospitality. At Grand Horizon Hotel, every stay is
          thoughtfully designed to create unforgettable memories.
        </p>
      </section>

<footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h2>GRAND HORIZON</h2>
      <span>HOTEL & RESORT</span>
      <p>
        Experience luxury, comfort and exceptional hospitality.
        Your perfect escape begins here.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#rooms">Our Rooms</a>
      <a href="#facilities">Facilities</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact Us</a>
    </div>

    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>📍 Your Hotel Address</p>
      <p>📞 +254 700 000 000</p>
      <p>✉️ info@grandhorizonhotel.com</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © 2026 Grand Horizon Hotel. All Rights Reserved.
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;
