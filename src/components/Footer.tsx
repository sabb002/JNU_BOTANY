import { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaFacebook,
  FaFacebookMessenger,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <section className="footer">
      <div className="linkContainer">
        <div className="links">
          <h3>Jagannath University</h3>
          <div className="link">
            <div className="one">
              <a href="https://www.jnu.ac.bd">official website</a>
            </div>
            <div className="two">
              <a href="/">Privacy Policy</a>
            </div>
          </div>
          <div className="social">
            <p>idea & resources:</p>
            <div className="adil">
              <img src="/images/friend/adil.jpg" alt="Adil Hasan" />
              <p>Adil Hasan </p>
              <a href="https://www.facebook.com/adilhasan23" target="_blank">
                <FaFacebook />
              </a>
            </div>
            <div className="jabir">
              <img src="/images/friend/jabir.jpg" alt="Mushfique Jabir" />
              <p>Mushfique Jabir</p>
              <a
                href="https://www.facebook.com/profile.php?id=100006352696608"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="email">
          <p>Talk to the developer</p>
          <form>
            <input type="text" placeholder="coming soon :)" />
            <div className="send" onClick={() => setSent(true)}>
              {sent ? <FaCheck /> : <FaArrowRight />}
            </div>
            <span> or </span>
            <a
              className="myself"
              href="https://www.facebook.com/profile.php?id=100080286321737"
              target="_blank"
            >
              <FaFacebookMessenger />
            </a>
          </form>
        </div>
      </div>
      <div className="line"></div>
    </section>
  );
}
