import React from "react";
import SolutionLayOutContactUs from "../../../../Utils/SolutionLayOut/SolutionLayOutContactUs/SolutionLayOutContactUs";

const SolutionContactUs = () => {
  return (
    <SolutionLayOutContactUs
      headerText="GET IN TOUCH"
      namePlaceholder="Full Name"
      categoryPlaceholder="Product Type"
      emailPlaceholder="Your Email"
      phonePlaceholder="Your Phone Number"
      messagePlaceholder="Your Message..."
      buttonText="Send Message"
      onSubmit={() => {
        console.log("Form submitted!");
      }}
    />
  );
};

export default SolutionContactUs;
