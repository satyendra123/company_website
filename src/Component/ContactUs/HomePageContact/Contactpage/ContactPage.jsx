import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Contact.css";

const Homecontact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
    product_or_solution: "", // Ensure this is either "product" or "solution"
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = {
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        product_or_solution: formData.product_or_solution,
        message: formData.message,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact/contact/form/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setIsMessageSent(true);
        setFormData({
          email: "",
          name: "",
          phone: "",
          message: "",
          product_or_solution: "",
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="homecontact" className="homecontact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ textAlign: "center", fontWeight: "600", textTransform: "uppercase", fontSize: "34px" }}>Contact</h2>

      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Google Map */}
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.956152571729!2d77.53870917494895!3d28.420579893675065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8e87db032f%3A0x1116a3f694e23418!2sHouston%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1735762648113!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className="row gy-4">
          {/* homecontact Info */}
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>D 148, EPIP, Kasna, Surajpur Site V, Greater Noida, Uttar Pradesh 201310
                </p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91-9999126882
                </p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>digital@houstonsystem.com
                </p>
              </div>
            </div>
          </div>

          {/* homecontact Form */}
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>

              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}

                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="product_or_solution"
                    placeholder="Product or Solution Name"
                    value={formData.product_or_solution}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">


                  <button className="homecontact-button" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <section class="global-presence">
          <h2>Our global presence</h2>
          <div class="locations">
            <div class="location">
              <h3>California, United States</h3>
              <p>Alan Holmberg</p>
              <a href="mailto:alan@houstonsystem.com">alan@houstonsystem.com</a>
            </div>
            <div class="location">
              <h3>United Kingdom</h3>
              <p>David Hutchinson</p>
              <a href="mailto:dhutchinson@houstonsystem.com">dhutchinson@houstonsystem.com</a>
            </div>
            {/* <div class="location">
              <h3>Illinois, United States</h3>
              <p>Steve Holmberg</p>
              <a href="mailto:steve@houstonsystem.com">steve@houstonsystem.com</a>
            </div> */}
            <div class="location">
              <h3>Germany</h3>
              <p>Jane Henkemeier</p>
              <a href="mailto:jane@houstonsystem.com">jane@houstonsystem.com</a>
            </div>
            <div class="location">
              <h3>Australia & New Zealand</h3>
              <p>Ben Jones</p>
              <a href="mailto:b.jones@houstonsystem.com">b.jones@houstonsystem.com</a>
            </div>
            {/* <div class="location">
              <h3>Middle East</h3>
              <p>Ivan Bernard</p>
              <a href="mailto:i.bernard@houstonsystem.com">i.bernard@houstonsystem.com</a>
            </div> */}
            {/* <div class="location">
              <h3>United Kingdom</h3>
              <p>David Hutchinson</p>
              <a href="mailto:dhutchinson@houstonsystem.com">dhutchinson@houstonsystem.com</a>
            </div> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Homecontact;
