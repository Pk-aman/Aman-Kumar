"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Under development");
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
              <label htmlFor="from" className="text-gray-500">
                To:
              </label>
              <input
                type="email"
                placeholder="To"
                value="a.amankrpin2@gmail.com"
                readOnly
                className="border-2 border-gray-300 rounded-full px-4 py-2"
              />
              <label htmlFor="from" className="text-gray-500">
                From:
              </label>
              <input
                id="from"
                name="from"
                type="email"
                placeholder="From"
                value={formData.from}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
                required
              />
              <label htmlFor="subject" className="text-gray-500">
                Subject:
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded-full px-4 py-2"
                required
              />
              <label htmlFor="message" className="text-gray-500">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
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
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
