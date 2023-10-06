import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="contact-section">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div class="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div class="contact-image">
          <img src="https://img.freepik.com/free-photo/contact-us-customer-support-enquiry-hotline-concept_53876-128047.jpg?size=626&ext=jpg&ga=GA1.1.1598422473.1685343645&semt=ais" alt="contactimage"  />
        </div>
      </section>
    </div>
  );
};

export default Contact;
