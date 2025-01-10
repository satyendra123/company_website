import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import Insta from "./ContactUsIcons/instagram (2).png";
import Linkedin from "./ContactUsIcons/linkedin.png";
import Facebook from "./ContactUsIcons/facebook.png";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
    product_or_solution: "",
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
    <Container style={{ marginTop: "-5%" }} fluid className="p-4">
      <Row className="d-flex justify-content-center align-items-stretch">
        {/* Contact Info Section */}
        <Col
          xs={12}
          md={4}
          className="text-white p-4 align-self-start"
          style={{
            backgroundColor: "#436B88",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            height: "50vh",
            borderRadius: "15px",
          }}
        >
          <h1>Contact us!</h1>
          <p style={{ paddingTop: "4%" }} className="mb-2">
            <i className="bi bi-telephone-fill"></i> <span style={{ paddingLeft: "2%" }}>+91-9999126882</span>
          </p>
          <p style={{ paddingTop: "4%" }} className="mb-2">
            <i className="bi bi-envelope-fill"></i> <span style={{ paddingLeft: "2%" }}>digital@houstonsystem.com</span>
          </p>
          <p style={{ paddingTop: "4%" }} className="mb-2">
            <i className="bi bi-geo-alt-fill"></i> <span style={{ paddingLeft: "2%" }}>D 148, EPIP, Kasna, Surajpur</span>
            Site V, <br /> <span style={{ paddingLeft: "6%", paddingTop: "4%" }}>Greater Noida, Uttar Pradesh 201310</span>
          </p>
          <div style={{ paddingTop: "5%" }} className="d-flex flex-row align-items-center gap-3 mt-3 social-icons">
            <a href="https://www.instagram.com/houstonsystems/"><img src={Insta} alt="" /></a>
            <a href="https://www.linkedin.com/company/7972882/"><img src={Linkedin} alt="" /></a>
            <a href="https://www.facebook.com/HoustonSystem"><img src={Facebook} alt="" /></a>
          </div>
        </Col>

        {/* Contact Form Section */}
        <Col
          xs={12}
          md={6}
          className="bg-white p-4 rounded contact-form"
          style={{
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            position: "relative",
            left: "-110px",
            borderRadius: "15px",
            opacity: "0.7",
            width: "40%",
            top: "60px",
          }}
        >
          <h3 className="getintouch">
            GET IN <strong>TOUCH</strong>
          </h3>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formProduct">
                  <Form.Label>Product/Solution</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product/Solution"
                    name="product_or_solution"
                    value={formData.product_or_solution}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="d-block mx-auto w-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;

























// import React, {useState} from "react";
// import "./ContactUs.css";
// import axios from "axios";

// import PhoneCall from "./ContactUsIcons/phone_call.svg";
// import Message from "./ContactUsIcons/message.svg";
// import Location from "./ContactUsIcons/location.svg";
// import Insta from "./ContactUsIcons/instagram.png";
// import Linkedin from "./ContactUsIcons/linkedin.png";
// import facebook from "./ContactUsIcons/facebook.png";

// const ContactUs = () => {
//   // State to store form inputs
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     phone: "",
//     message: "",
//     product_or_solution: "", // Ensure this is either "product" or "solution"
//   });

//   const [isMessageSent, setIsMessageSent] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const data = {
//         email: formData.email,
//         name: formData.name,
//         phone: formData.phone,
//         product_or_solution: formData.product_or_solution,
//         message: formData.message,
//       };

//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/contact/contact/form/",
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert("Form submitted successfully!");
//         setIsMessageSent(true);
//         setFormData({
//           email: "",
//           name: "",
//           phone: "",
//           message: "",
//           product_or_solution: "",
//         });
//       } else {
//         alert("Form submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setIsMessageSent(false);
//     setFormData({
//       email: "",
//       name: "",
//       phone: "",
//       message: "",
//       product_or_solution: "",
//     });
//   };
//   return (
//     <div
//       className="d-flex justify-content-center align-items-center contact-us-main px-2"
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "white",
//         alignItems: "center",
//       }}
//     >
//       <div className="container-fluid mb-5">
//         <div className="row justify-content-center mb-5">
//           <div
//             className="col-lg-4 col-md-12 mb-3 contact-details"
//             style={{ position: "relative", zIndex: 1 }}
//           >
//             <div style={{ borderRadius: "40px" }} className="card shadow">
//               <div
//                 className="card-body"
//                 style={{
//                   minHeight: "50vh",
//                   backgroundColor: "#436B88",
//                   borderRadius: "40px",
//                   paddingTop: "3rem",
//                   paddingBottom: "2rem",
//                   // border: "2px solid red",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontFamily: "Helvetica Rounded",
//                     fontWeight: "700px",
//                   }}
//                 >
//                   <h1 className="text-white text-center">Contact us!</h1>
//                 </div>
//                 <div
//                 className="d-flex align-items-center justify-content-center text-center"
//                 style={{ gap: "10px", cursor: "pointer" }}
//                 onClick={() => (window.location.href = "tel:+919999126882")}
//                 > 
//                 <img
//                 src={PhoneCall}
//                alt=""
//               style={{ verticalAlign: "middle" }}
//               />
//               <p className="mobilenumber"
//     style={{
//       color: "white",
//       display: "inline-block",
//       verticalAlign: "middle",
//       fontSize: "20px",
//       marginTop: "20px",
//       marginRight: "180px",
//     }}
//   >
//     +91-9999126882
//   </p>
//             </div>



//                 <div className="d-flex align-items-center justify-content-center text-center">
//   <img
//     src={Message}
//     alt=""
//     style={{ marginLeft:"23px",verticalAlign: "middle",marginTop:"-14px" }}
//   />
//   <p
//     style={{
//       color: "white",
//       display: "inline-block",
//       verticalAlign: "middle",
//       fontSize: "18px",
//       // marginTop: "5px",
//       marginLeft: "20px", /* Add margin here */
//       marginRight: "120px",
//     }}
//   >
//     digital@houstonsystem.com
//   </p>
// </div>

// <div className="d-flex align-items-start" style={{ gap: "15px", marginLeft: "33px" }}>
//   <img
//     src={Location}
//     alt=""
//     style={{ verticalAlign: "middle",marginTop:"8px", }}
//   />
//   <p
//     style={{
//       color: "white",
//       fontSize: "18px",
//       marginLeft:"5px",
//       maxWidth: "250px",
//     }}
//   >
//     D 148, EPIP, Kasna, Surajpur Site V, Greater Noida, Uttar Pradesh 201310
//   </p>
// </div>

//                 <div
//                   className="social-icons"
//                   style={{
//                     display: "flex",
//                     marginLeft: "65px",
//                     marginTop: "30px",
//                     paddingBottom: "12px",
//                   }}
//                 >
//                   <div style={{ margin: "0 10" }}>
//                   <a 
//   href="https://www.instagram.com/houstonsystems/" 
//   target="_blank" 
//   rel="noopener noreferrer"
// >
//   <img
//     style={{
//       backgroundColor: "white",
//       borderRadius: "50%",
//       padding: "5px",
//     }}
//     src={Insta}
//     alt="Instagram"
//   />
// </a>
//                   </div>
//                   <div style={{ margin: "0 10px" }}>
//                     <img
//                       style={{
//                         backgroundColor: "white",
//                         borderRadius: "50%",
//                         padding: "5px",
//                         marginLeft: "10px",
//                       }}
//                       src={Linkedin}
//                       alt=""
//                     />
//                   </div>
//                   <div style={{ margin: "0 10px" }}>
//                   <a href="https://www.facebook.com/HoustonSystem">
//                     <img
//                       style={{
//                         backgroundColor: "white",
//                         borderRadius: "50%",
//                         padding: "3px",
//                       }}
//                       src={facebook}
//                       alt=""
//                     />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="col-lg-5 col-md-12 mb-4"
//             style={{
//               position: "relative",
//               borderRadius: "40px",
//               left: "-130px",

//               top: "120px",
//               zIndex: 6,
//             }}
//           >
//             <div
//               style={{
//                 borderRadius: "40px",
//                 marginRight: "10px",
//                 minHeight: "450px",
//                 // border: "2px solid red",
//                 paddingLeft: "2rem",
//                 paddingRight: "2rem",
//                 paddingTop: "2rem",
//                 paddingBottom: "2rem",
//                 backgroundColor: "rgba(255, 255, 255, 0.5)",
//               }}
//               className="card shadow"
//             >
//               <div
//                 style={{
//                   fontFamily: "Helvetica Now Display",
//                   borderRadius: "40px",
//                 }}
//                 className="card-body"
//               >
//                 <h1 className="mt-4 text-center">
//                   GET IN
//                   <span
//                     style={{ fontWeight: "bold", paddingLeft: "10px" }}
//                     className="font-weight-bold"
//                   >
//                     TOUCH
//                   </span>
//                 </h1>
//                 <form onSubmit={handleSubmit}>
//                   <div className="row mb-3">
//                     <div className="col-md-6 mb-3">
//                       <label
//                         style={{ color: "#436B88", fontFamily: "Poppins" }}
//                         htmlFor="name"
//                       >
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control input-placeholder"
//                         placeholder="First Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         disabled={isSubmitting} // Disable inputs if message is sent
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label
//                         style={{ color: "#436B88", fontFamily: "Poppins" }}
//                         htmlFor="product_or_solution"
//                       >
//                         Product/Solution
//                       </label>
//                       <input
//                         type="text"
//                         name="product_or_solution"
//                         className="form-control input-placeholder"
//                         placeholder="Product/Solution"
//                         value={formData.product_or_solution}
//                         onChange={handleChange}
//                         disabled={isSubmitting} // Disable inputs if message is sent
//                       />
//                     </div>
//                   </div>

//                   <div className="row mb-3">
//                     <div className="col-md-6 mb-3">
//                       <label
//                         style={{ color: "#436B88", fontFamily: "Poppins" }}
//                         htmlFor="email"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control input-placeholder"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         disabled={isSubmitting} // Disable inputs if message is sent
//                       />
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <label
//                         style={{ color: "#436B88", fontFamily: "Poppins" }}
//                         htmlFor="phone"
//                       >
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         className="form-control input-placeholder"
//                         placeholder="Mobile Number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         disabled={isSubmitting} // Disable inputs if message is sent
//                       />
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-12">
//                       <label
//                         style={{
//                           color: "#436B88",
//                           fontFamily: "'Helvetica', sans-serif",
//                         }}
//                         htmlFor="message"
//                       >
//                         Message
//                       </label>
//                       <textarea
//                         name="message"
//                         className="form-control input-placeholder"
//                         rows="3"
//                         placeholder="Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         disabled={isSubmitting} // Disable textarea if message is sent
//                       ></textarea>
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                   <button className="btn btn-primary w-100" type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
