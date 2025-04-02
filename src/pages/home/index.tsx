import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LiaDownloadSolid } from "react-icons/lia";
import Projects from "../Projects";
import ResumePage from "../resume";
import Blogs from "../Blogs";
import Contact from "../Contact";
import Publication from "../Publication";
import Footer from "../../components/layout/Footer";

const HomePage = () => {
  const titles = ["Nazmul Islam", "Cyber Security Engineer"];
  
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; 
    const delayBetweenTitles = 1000; 

    if (!isDeleting && charIndex === titles[titleIndex].length) {
      setTimeout(() => setIsDeleting(true), delayBetweenTitles);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }

    const timeout = setTimeout(() => {
      setCurrentTitle(
        titles[titleIndex].substring(
          0,
          isDeleting ? charIndex - 1 : charIndex + 1
        )
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden overflow-x-hidden">
      {/* Home page */}
      <motion.div
        id="home"
        className="flex items-center flex-col md:flex-row h-screen justify-center bg-teal-100 gap-8 py-16 px-4 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image with Animation */}
        <motion.img
          src="./images/profile.jpeg"
          alt="profile-pic"
          className="w-48 h-48 rounded-full bg-teal-100"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Introduction Text */}
        <motion.div
          className="max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl font-semibold">Hi, I am</p>
          <p className="text-4xl font-bold text-teal-700 mt-2">
            {currentTitle}
            <span
              className={`${
                cursorVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              |
            </span>
          </p>
          <br />
          <motion.div
            className="font-semibold text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="mb-4">
              I am a Cyber Security Engineer with a strong problem-solving
              mindset and expertise in securing digital systems. With a
              Computer Science background and an MSc in Cyber Security
              Engineering from the University of East London, I specialize in
              protecting applications, optimizing security, and mitigating
              threats.
            </p>
            <p className="mb-4">
              Now based in the UK, I am passionate about delivering efficient,
              secure, and scalable solutions. Let’s work together to fortify
              your digital presence and drive success!
            </p>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            className="mt-6 flex gap-2"
          >
            <a href="/Nazmul Vai.pdf" target="_blank" className="text-white font-bold cursor-pointer px-6 py-2 rounded-md bg-teal-500 transition duration-300 hover:bg-teal-700">
             <div className="flex gap-2">
             <LiaDownloadSolid size={20} />
             <p>Download CV</p>
             </div>
            </a>

            <button className="text-white font-bold cursor-pointer px-6 py-2 rounded-md bg-teal-500 transition duration-300 hover:bg-teal-700">
              Contact
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Resume Section */}
      <div
        id="resume"
        className="bg-teal-200"
      >
        <ResumePage />
      </div>

      {/* Projects Section */}
      <div
        id="projects" className="bg-teal-100"
      >
        <Projects />
      </div>

      {/* Publication Section */}
      <div
        id="publication"
        className="bg-teal-200"
      >
        <Publication />
      </div>

      {/* Blogs Section */}
      <div
        id="blogs"
        className="bg-teal-100"
      >
        <Blogs />
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="bg-teal-200"
      >
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
