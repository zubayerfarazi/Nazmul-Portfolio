import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      access_key: "c85b69cb-addf-4e24-aa46-528fc609d44b",
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSuccessMessage("There was an error sending your message.");
      }
    } catch (error) {
      setSuccessMessage("Error sending message. Please try again.");
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800">Contact Me</h2>
      <p className="text-center text-gray-600 mb-12">
        Feel free to reach out for any inquiries or collaborations.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-teal-100 shadow-lg p-8 rounded-lg">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <div className="bg-teal-200 rounded-full p-2">
              <FaPhoneAlt className="text-teal-800 text-xl" />
            </div>
            <a href={`tel:+447428998605`} className="text-lg font-semibold">
              +447428998605
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-teal-200 rounded-full p-2">
              <FaEnvelope className="text-teal-800 text-xl" />
            </div>
            <a href={`mailto:nsnazmulislam10@gmail.com`} className="text-lg font-semibold">
              nsnazmulislam10@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-teal-200 rounded-full p-2">
              <FaMapMarkerAlt className="text-teal-800 text-xl" />
            </div>
            <p className="text-lg font-semibold">137 Cannon Street Road, E1 2LX, London, UK</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-teal-800 rounded-md focus:outline-none focus:border-teal-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-teal-800 rounded-md focus:outline-none focus:border-teal-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-teal-800 rounded-md focus:outline-none focus:border-teal-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <textarea
                placeholder="Your Message"
                rows="3"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-teal-800 rounded-md focus:outline-none focus:border-teal-500"
              ></textarea>
            </motion.div>

            {successMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center text-lg text-green-600"
              >
                {successMessage}
              </motion.div>
            )}

            <motion.button
              type="submit"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="w-full bg-teal-800 text-white font-medium py-3 rounded-md cursor-pointer hover:bg-teal-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
