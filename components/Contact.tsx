"use client";
import React, { useState } from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./ui/animated-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export function AnimatedModalDemo() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    
    emailjs
      .send("service_d705cym", "template_4jutahj", formData, "H7x-dsIDD_hiwIoW0")
      .then(() => {
        toast.success("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch(() => {
        toast.error("Failed to send email. Try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-32 flex flex-col items-center justify-center space-y-4">
      <Toaster position="top-right" reverseOrder={false} />
      
      <Modal>
        <div className="text-purple font-sans text-3xl">Send Me A Message</div>
        <ModalTrigger className="bg-black-100 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contact Me
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#7c7c7e" }} />
          </div>
        </ModalTrigger>
        
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Contact Me
              </span>
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-full border border-black w-28"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
