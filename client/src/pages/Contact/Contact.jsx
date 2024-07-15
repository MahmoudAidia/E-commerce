import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contactPage">
      <div className="top">
        <h2>Contact us</h2>
      </div>

      <div className="bottom">
        <h2>Let’s Start a Conversation</h2>
        <div className="text">
          <div className="left">
            <div>
              <span>Contact Us</span>
              <p>
                We'd love to hear from you! Whether you have a question,
                feedback, or need support, our team is here to help. Please feel
                free to reach out to us through any of the methods below.
              </p>
            </div>

            <div>
              <span>Get in Touch</span>
              <p>
                For general inquiries, please email us at{" "}
                <a>info@example.com</a>. For support-related questions, contact
                our support team at support@example.com.
              </p>
            </div>

            <div>
              <span>Phone</span>
              <p>
                You can reach us by phone at +1 (123) 456-7890. Our customer
                service hours are Monday to Friday, 9 AM to 5 PM (EST).
              </p>
            </div>

            <div>
              <span>Social Media</span>
              <ul>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <LinkedIn />
                </li>
              </ul>
            </div>
          </div>
          <form className="right">
            <h2>Please note: all fields are required.</h2>
            <div className="form">
              <div>
                <label>Email</label>
                <input type="email" />
              </div>{" "}
              <div>
                <label>First Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Comments</label>
                <input type="text" />
              </div>
              <button>send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
