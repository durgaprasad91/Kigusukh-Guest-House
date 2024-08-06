import React, { useState } from 'react';
import '../CSS/Contactform.css';
import Swal from 'sweetalert2';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.phone) newErrors.phone = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Mobile number is invalid';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await Swal.fire({
        icon: 'success',
        title: 'Sent Successfully!',
        text: 'We will contact you soon. Thank you!',
        confirmButtonText: 'OK'
      });

      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    }
  };

  const handleViewInfo = () => {
    setShowContactInfo(true);
  };

  const handleCloseContactInfo = () => {
    setShowContactInfo(false);
  };

  return (
    <div id='contact' className="contact-container">
      {showContactInfo && (
        <div className="contact-info show">
          <button className="close-btn" onClick={handleCloseContactInfo} aria-label="Close">
            ❌
          </button>
          <h2>Contact Info</h2>
          <p><FaMapMarkerAlt className="icon" /> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p><FaEnvelope className="icon" /> kkghosh0099@gmail.com</p>
          <p><FaPhoneAlt className="icon" /> +91 9007062180</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
      <div className="form-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Mobile Number"
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message here..."
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
          <div className="form-buttons">
            <button type="submit">Send</button>
            <button type="button" onClick={handleViewInfo} className="view-info-btn">
              View Info <span className="arrow">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
