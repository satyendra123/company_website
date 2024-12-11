import React, {useState} from "react";
import "./ContactUs.css";
import PhoneCall from "./ContactUsIcons/phone_call.svg";
import Message from "./ContactUsIcons/message.svg";
import Location from "./ContactUsIcons/location.svg";
import Insta from "./ContactUsIcons/insta.svg";
import Discord from "./ContactUsIcons/discord.svg";
import ClickButton from "./ContactUsIcons/click_button.svg";

const ContactUs = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    product_type: "",
    email: "",
    phone: "",
    message: "",
  });

  // States to manage button status and text
  const [isMessageSent, setIsMessageSent] = useState(false); // Tracks if message is sent
  const [isSubmitting, setIsSubmitting] = useState(false); // Tracks if submission is in progress

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setIsSubmitting(true); // Set button to "In Progress"

    try {
      const response = await fetch(
        "http://localhost:5000/api/visitors/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send form data as JSON
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");

        setIsMessageSent(true); // Message sent successfully
        setIsSubmitting(false); // Stop submission state
      } else {
        console.error("Failed to submit form.");
        setIsSubmitting(false); // Stop submission state on failure
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false); // Stop submission state on error
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center contact-us-main px-2"
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <div className="container-fluid mb-5">
        <div className="row justify-content-center mb-5">
          <div
            className="col-lg-4 col-md-12 mb-3 contact-details"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div style={{ borderRadius: "40px" }} className="card shadow">
              <div
                className="card-body"
                style={{
                  minHeight: "50vh",
                  backgroundColor: "#436B88",
                  borderRadius: "40px",

                  paddingTop: "3rem",
                  paddingBottom: "2rem",
                  // border: "2px solid red",
                }}
              >
                <div
                  style={{
                    fontFamily: "Helvetica Rounded",
                    fontWeight: "700px",
                  }}
                >
                  <h1 className="text-white text-center">Contact us!</h1>
                </div>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <img
                    src={PhoneCall}
                    alt=""
                    style={{ marginRight: "10px", verticalAlign: "middle" }}
                  />
                  <p
                    style={{
                      color: "white",
                      display: "inline-block",
                      verticalAlign: "middle",
                      fontSize: "20px",
                      marginTop: "20px",
                      marginRight: "180px",
                    }}
                  >
                    +91-9999126882
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center text-center">
                  <img
                    src={Message}
                    alt=""
                    style={{ marginRight: "10px", verticalAlign: "middle" }}
                  />
                  <p
                    style={{
                      color: "white",
                      display: "inline-block",
                      verticalAlign: "middle",
                      fontSize: "18px",
                      marginTop: "20px",
                      marginRight: "120px",
                    }}
                  >
                    digital@houstonsystem.com
                  </p>
                </div>
                <div>
                  <span className="d-flex">
                    <img
                      src={Location}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    <p
                      style={{
                        color: "white",
                        fontSize: "20px",
                        maxWidth: "250px",
                      }}
                    >
                      D 148, EPIP, Kasna, Surajpur Site V, Greater Noida, Uttar
                      Pradesh 201310
                    </p>
                  </span>
                </div>
                <div
                  className="social-icons"
                  style={{
                    display: "flex",
                    marginLeft: "65px",
                    marginTop: "30px",
                    paddingBottom: "12px",
                  }}
                >
                  <div style={{ margin: "0 10" }}>
                    <img
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                      src={Insta}
                      alt=""
                    />
                  </div>
                  <div style={{ margin: "0 10px" }}>
                    <img
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                      src={Discord}
                      alt=""
                    />
                  </div>
                  <div style={{ margin: "0 10px" }}>
                    <img
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "3px",
                      }}
                      src={ClickButton}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-12 mb-4"
            style={{
              position: "relative",
              borderRadius: "40px",
              left: "-130px",

              top: "120px",
              zIndex: 6,
            }}
          >
            <div
              style={{
                borderRadius: "40px",
                marginRight: "10px",
                minHeight: "450px",
                // border: "2px solid red",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
              className="card shadow"
            >
              <div
                style={{
                  fontFamily: "Helvetica Now Display",
                  borderRadius: "40px",
                }}
                className="card-body"
              >
                <h1 className="mt-4 text-center">
                  GET IN
                  <span
                    style={{ fontWeight: "bold", paddingLeft: "10px" }}
                    className="font-weight-bold"
                  >
                    TOUCH
                  </span>
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                      <label
                        style={{ color: "#436B88", fontFamily: "Poppins" }}
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control input-placeholder"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isMessageSent} // Disable inputs if message is sent
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        style={{ color: "#436B88", fontFamily: "Poppins" }}
                        htmlFor="product_type"
                      >
                        Product/Solution
                      </label>
                      <input
                        type="text"
                        name="product_type"
                        className="form-control input-placeholder"
                        placeholder="Product/Solution"
                        value={formData.product_type}
                        onChange={handleChange}
                        disabled={isMessageSent} // Disable inputs if message is sent
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                      <label
                        style={{ color: "#436B88", fontFamily: "Poppins" }}
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control input-placeholder"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isMessageSent} // Disable inputs if message is sent
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        style={{ color: "#436B88", fontFamily: "Poppins" }}
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control input-placeholder"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isMessageSent} // Disable inputs if message is sent
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <label
                        style={{
                          color: "#436B88",
                          fontFamily: "'Helvetica', sans-serif",
                        }}
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="form-control input-placeholder"
                        rows="3"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isMessageSent} // Disable textarea if message is sent
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      style={{
                        fontFamily: "'Helvetica', sans-serif",
                        backgroundColor: isMessageSent ? "green" : "",
                        cursor:
                          isSubmitting || isMessageSent
                            ? "not-allowed"
                            : "pointer",
                      }}
                      disabled={isSubmitting || isMessageSent} // Disable button when in progress or after message is sent
                    >
                      {isSubmitting
                        ? "In Progress..."
                        : isMessageSent
                        ? "Message Sent"
                        : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
