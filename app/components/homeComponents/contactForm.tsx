"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    position: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      email: "",
      name: "",
      phone: "",
      company: "",
      position: "",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        toast.success("Email sent successfully");
        resetForm();
      })
      .catch((err) => {
        toast.error("Email not sent");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="p-5">
        <div className="text-4xl font-bold flex justify-center items-center">
          <h1>Contact Me</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-500">
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
              />
              <label htmlFor="name" className="text-gray-500">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
                required
              />
              <label htmlFor="phone" className="text-gray-500">
                Phone:
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
                required
              />
              <label htmlFor="company" className="text-gray-500">
                Company:
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
                required
              />
              <label htmlFor="position" className="text-gray-500">
                Position:
              </label>
              <input
                id="position"
                name="position"
                type="text"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
                required
              />
              <label htmlFor="message" className="text-gray-500">
                Job Description:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Mention Experience and required skills here..."
                value={formData.message}
                onChange={handleChange}
                rows={10}
                className="border-2 border-gray-300 rounded-xl px-4 py-2 resize-y"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ContactForm;
