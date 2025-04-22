import { useState, useEffect } from "react";
import { IoMoon } from "react-icons/io5";
import { FaBlog, FaBookOpen, FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBriefcase, FaEnvelope } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const sections = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "resume", label: "Resume", icon: <BsFillFileEarmarkTextFill /> },
  { id: "projects", label: "Projects", icon: <FaBriefcase /> },
  { id: "publication", label: "Publications", icon: <FaBookOpen /> },
  { id: "blogs", label: "Blog", icon: <FaBlog /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };


  useEffect(() => {
    const observerOptions = {
      root: null, 
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="relative">
      <div className="md:hidden fixed top-0 left-0 w-full p-4 bg-teal-900 flex items-center justify-between z-50">
        <p className="text-xl font-bold text-white">Nazmul Islam</p>
        <div className="flex items-center gap-6 cursor-pointer">
          <IoMoon size={22} className="text-white" />
          <GiHamburgerMenu
            size={24}
            className="text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>

      <div
        className={`fixed top-15.5 right-0 w-64 h-[calc(100%-50px)] bg-teal-800 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-64"
        } md:hidden flex flex-col px-6 py-10 justify-between z-50`}
      >
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <div className="flex flex-col items-start text-lg font-semibold space-y-4 cursor-pointer">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md transition-all ${
                activeSection === item.id
                  ? "bg-teal-700 text-white font-bold"
                  : "text-gray-400 hover:text-teal-100 transition-all"
              }`}
            >
              {item.icon}
              <p>{item.label}</p>
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 cursor-pointer">
          <FaLinkedin size={20} />
          <FaGithub size={20} />
          <FaFacebook size={20} />
        </div>
      </div>

      <div className="hidden fixed md:flex flex-col px-10 shadow-xl w-64 h-full py-10 justify-between bg-teal-900 text-white">
        <div className="leading-tight">
          <p className="text-xl font-bold">Nazmul Islam</p>
          <p className="text-[12px] italic">Last of alphabets</p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex flex-col items-start text-lg font-semibold space-y-4 cursor-pointer">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md transition-all ${
                activeSection === item.id
                  ? "bg-teal-700 text-white font-bold"
                  : "text-gray-400 hover:text-teal-100 transition-all"
              }`}
            >
              {item.icon}
              <p>{item.label}</p>
            </button>
          ))}
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-col items-center gap-4 cursor-pointer">
          <div className="flex gap-4">
            <Link to={"https://www.linkedin.com/in/md-nazmul-islam-4183371b4/"}>
              <FaLinkedin size={20} />
            </Link>
            <FaGithub size={20} />
            <FaGoogleScholar size={20} />
          </div>
          <div>
            <p className="text-[10px]">© 2025 Nazmul. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
