import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
    id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="rounded-2xl bg-white/70 backdrop-blur-md border border-teal-200 transition-all hover:shadow-xl cursor-pointer overflow-hidden"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-42 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {project.category}
        </span>
      </div>

      <div className="p-5 flex flex-col space-y-3">
        <h3 className="text-2xl font-bold text-teal-800">{project.name}</h3>
        <p className="text-gray-700 text-md line-clamp-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-center px-5 py-2 bg-teal-600 text-white rounded-full font-medium shadow hover:bg-teal-500 hover:scale-105 transition-transform duration-300"
        >
          View Details
        </a>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
