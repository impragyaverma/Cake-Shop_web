import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import founderImage from "../../assets/founder.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>The Cake Shop</h4>
          <p>
            Established in 2024, The Cake Shop has revolutionized the way people
            experience e-retailing of cakes, flowers, gifts, and more. With a
            focus on providing an exclusive range of high-quality goodies and
            reliable doorstep delivery services, we ensure a seamless shopping
            experience for our customers. Our 11-year journey has been marked
            by continuous growth, innovation, and a commitment to excellence.
            From humble beginnings to becoming one of India’s most trusted
            online portals for gifts and cakes, The Cake Shop is now your
            one-stop solution for all gifting needs!
          </p>

          <h4 className="secondHeading">Explore More With Us</h4>
          <Link to="/explore">
            <RiFindReplaceLine size={24} />
          </Link>
        </article>

        <div className="founder-section">
          <h2>Meet Our Founders</h2>
          <article>
            <div className="founder-details">
              <img src={founderImage} alt="Founders" className="founder-image" />
              <h3>Pragya & Nishi Sharma</h3>
            </div>

            <p>
              We are Pragya and Nishi Sharma, the proud founders of The Cake
              Shop. Our mission is to spread joy and sweetness across India
              with every cake and gift delivered. Affiliated with the ultimate
              standard of taste and quality, we’re here to make every occasion
              special for you.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
