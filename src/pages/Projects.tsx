import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-xl bg-teal-300 shadow-lg p-3 transition-transform transform cursor-pointer hover:shadow-xl"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-all duration-300 ease-in-out"
      />
      <div>
        <h3 className="text-xl font-bold text-center pb-2 text-gray-800">{project.name}</h3>
        <p className="text-sm text-gray-800 text-justify">{project.description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { category: "Java", name: "Intelligent Scientific Calculator", description: "Feature-rich calculator using OOP.", image: "./images/scientific-calculator.png"},
    { category: "Java", name: "Smart Student Management System", description: "Student platform with MySQL integration.", image: "./images/sms.png" },
    { category: "Java", name: "Next-Gen Library Management System", description: "Streamlined library management with MySQL.", image: "./images/lms.png" },
    { category: "Java", name: "Online Ticket Booking Hub", description: "Real-time ticket booking system.", image: "./images/tts.jpg" },
    { category: "Java", name: "Supermarket Inventory System", description: "Inventory tracking and billing system.", image: "./images/sms.png" },
    { category: "PHP", name: "Hospital Management System", description: "Patient records & billing with PHP.", image: "./images/hms.png" },
    { category: "IoT", name: "Obstacle-Avoiding Car", description: "Self-navigating car with Arduino.", image: "./images/lfro.png" },
    { category: "IoT", name: "Smart Traffic Control", description: "Real-time traffic system using IoT.", image: "./images/tm.png" },
    { category: "ML", name: "Smart Precision Agriculture", description: "AI-powered precision farming.", image: "./images/iot.png" },
  ];

  const categories = ["All", "Java", "PHP", "IoT", "ML"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="p-8 min-h-screen">
      <div className="mb-8 text-center">
        <p className="text-4xl font-bold text-center text-gray-800">My Projects</p>
        <p className="text-center text-gray-600">A showcase of my work</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer
              ${
                selectedCategory === category
                  ? "bg-teal-700 text-white shadow-lg"
                  : "bg-teal-200 hover:bg-teal-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards (Appear One by One) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
