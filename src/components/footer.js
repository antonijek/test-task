import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          <h2>Sell online</h2>
          <p>Sell on Amazon</p>
          <p>Sell on eBay</p>
          <p>Sell on Google</p>
          <p>Sell on Facebook</p>
          <p>Sell on Instagram</p>
          <p>Sell on WhatsApp</p>
          <p>Sell on TikTok</p>
          <h2>Menage Store</h2>
          <p>Mobile</p>
          <p>APP market</p>
          <p>Connect WP website</p>

          <h2>Laganoo</h2>
          <p>About us</p>
          <p>Press</p>
          <p>Press kit</p>
          <p>Support</p>
          <p>Sitemap</p>
          <p>Copyright policy</p>
          <p>Terms of service</p>
          <p>Press</p>
          <h2>We Build for You</h2>
          <p>Ecommerce website</p>
          <p>Business website</p>
          <h2>Other Services</h2>
          <p>Branding</p>
          <p>Social Media Managment</p>
          <p>Email Marketing </p>
          <p>PPC</p>
          <p>SEO</p>
          <p> Payment Solutions</p>
          <p>Image Library</p>
          <p>Buy Domain</p>
        </div>
        <div className="right-footer">
          <h2> Price</h2>
          <p>Monthly Plans</p>
          <p>Annual Plans</p>
          <p>How to chose plan</p>
          <h2>Learn</h2>
          <p>Community </p>
          <p>FAQ</p>
          <p>Tutorials </p>
          <p>How to</p>
          <h2>Partners</h2>
          <p>Partnerships</p>
          <p> Reseller Program</p>
          <p>Investors</p>
          <h2>DIY</h2>
          <p>Email marketing</p>
          <p>Email hosting</p>
          <p>SEO</p>
        </div>
      </div>
      <div className="medias">
        <div className="social-networks">
          <Link to="https://www.facebook.com/LaganooEcommerce">
            <img
              className="social-network"
              src="../images/facebook.png"
              alt=""
            />
          </Link>
          <Link to="https://www.instagram.com/laganoo.ecommerce/">
            <img
              className="social-network"
              src="../images/instagram.png"
              alt=""
            />
          </Link>
          <Link to="https://www.linkedin.com/company/laganoo/mycompany/">
            <img
              className="social-network"
              src="../images/linkedin-logo.png"
              alt=""
            />
          </Link>
          <Link to="https://www.youtube.com/channel/UCBFuzzpcPZPfQqPEgIIkFUg">
            <img
              className="social-network"
              src="../images/youtube.png"
              alt=""
            />
          </Link>
          <Link to="https://twitter.com/LaganooEcomm">
            <img
              className="social-network"
              src="../images/twitter-sign.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <button className="btn-login">Log in</button>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2022 Laganoo. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
