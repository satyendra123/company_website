import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <a href="appointment.html" className="btn btn-primary btn-primary-outline rounded-pill py-3 px-4 ms-4">
            Contact Us <FontAwesomeIcon icon={faPhone} className="ms-2" />
        </a>
    );
}

export default ContactUs;
