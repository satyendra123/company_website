import React, { useState } from "react";
import "./SolutionLayOutContactUs.css";

const SolutionLayOutContactUs = ({
  headerText = "GET IN TOUCH",
  namePlaceholder = "Name",
  categoryPlaceholder = "Category",
  emailPlaceholder = "Email",
  phonePlaceholder = "Phone",
  messagePlaceholder = "Write Message...",
  buttonText = "Submit",
}) => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);   // Tracks if submission is in progress

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
      const response = await fetch("http://localhost:5000/api/visitors/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        
        setIsMessageSent(true);          // Message sent successfully
        setIsSubmitting(false);          // Stop submission state
      } else {
        console.error("Failed to submit form.");
        setIsSubmitting(false);          // Stop submission state on failure
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);            // Stop submission state on error
    }
  };

  return (
    <div className="solution-contact-us container">
      <div className="solution-contact-us-header">
        <p>{headerText}</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={namePlaceholder}
            className="input-field solution-contact-us-mb-2"
            value={formData.name}
            onChange={handleChange}
            disabled={isMessageSent} // Disable inputs if message is sent
          />
          <input
            type="text"
            name="product_type"
            placeholder={categoryPlaceholder}
            className="input-field"
            value={formData.product_type}
            onChange={handleChange}
            disabled={isMessageSent} // Disable inputs if message is sent
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            className="input-field solution-contact-us-mb-2"
            value={formData.email}
            onChange={handleChange}
            disabled={isMessageSent} // Disable inputs if message is sent
          />
          <input
            type="tel"
            name="phone"
            placeholder={phonePlaceholder}
            className="input-field"
            value={formData.phone}
            onChange={handleChange}
            disabled={isMessageSent} // Disable inputs if message is sent
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder={messagePlaceholder}
            className="textarea-field"
            value={formData.message}
            onChange={handleChange}
            disabled={isMessageSent} // Disable textarea if message is sent
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className={`submit-button ${isMessageSent ? "button-success" : ""}`}
            style={{
              backgroundColor: isMessageSent ? "green" : "",
              cursor: isSubmitting || isMessageSent ? "not-allowed" : "pointer",
            }}
            disabled={isSubmitting || isMessageSent} // Disable button when in progress or after message is sent
          >
            {isSubmitting ? "In Progress..." : isMessageSent ? "Message Sent" : buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SolutionLayOutContactUs;
