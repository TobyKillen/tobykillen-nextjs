'use client';
import Link from "next/link";
import Image from "next/image";
import Myself from "./../../public/me_1.jpg";
import Background from "../components/background";
import BackgroundImage from './../../../public/background.jpg';
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid Email Address is required.";
    }
    if (!formData.contactNumber.trim() || !/^[0-9]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact Number is required and must be numeric.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted", formData);
      // Add form submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Background src={BackgroundImage}>
        <div className="p-5 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
          <h1 className="text-xl font-bold mb-4">Contact Us</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={`p-2 border rounded-md ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`p-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <label htmlFor="contactNumber" className="text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`p-2 border rounded-md ${errors.contactNumber ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}

            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className={`p-2 border rounded-md h-24 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </Background>
    </div>
  );
}
