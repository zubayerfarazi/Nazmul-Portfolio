import { motion } from "framer-motion";

const ResumePage = () => {
  const skills = [
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 75 },
    { name: "CSS", percentage: 80 },
    { name: "MongoDB", percentage: 70 },
  ];

  const educationData = [
    {
      title: "MSc Cyber Security Engineering",
      year: "Sep 2024 - Present",
      institution: "University of East London",
    },
    {
      title: "Bachelor of Science in Computer Science",
      year: "Jan 2020 - Dec 2024",
      institution: "Notre Dame University Bangladesh",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      year: "Jun 2017 - July 2019",
      institution: "St. Gregory’s High School and College",
    },
  ];

  const experienceData = [
    {
      title: "Data Analyst Intern",
      year: "Nov 2023 - Dec 2023",
      institution: "Progoti Systems Ltd., TallyKhata",
    },
  ];

  const awardData = [
    {
      title: "Summa Cum Laude Award",
      year: "for the highest CGPA in the Bachelor’s Degree by",
      institution: "Notre Dame University Bangladesh",
    },
    {
      title: "Stand 5th in the National Hackathon Contest",
      year: "2023",
      institution: "Khwaja Yunus Ali University - Bangladesh",
    },
    {
      title: "Stand 2nd in the Programming Contest",
      year: "2023",
      institution: "Notre Dame University Bangladesh Computer Club",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <p className="text-4xl font-bold text-center text-gray-800 mb-10">
        My Resume
      </p>

      {/* Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl font-semibold bg-teal-800 w-30 text-center mb-10 text-white p-2 rounded-md">
            Skills
          </p>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between space-x-4">
              <p className="text-lg font-bold w-32">{skill.name}</p>
              <div className="flex flex-col justify-center w-full">
                <div className="relative flex-grow top-0 border border-gray-200 bg-white h-4 rounded-full w-full">
                  <motion.div
                    className="h-full bg-teal-800 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, delay: index * 0.2 }}
                  />
                </div>
              </div>
              <div className="relative font-semibold text-end -top-6 right-14">
                {skill.percentage}%
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-2xl font-semibold bg-teal-800 w-36 text-center mb-10 text-white p-2 rounded-md">
            Education
          </p>
          <div className="absolute h-64 border-l-4 border-teal-800 left-2 transform -translate-x-1/2 top-23"></div>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: index * 0.3 }}
              >
                <div className="w-4 h-4 rounded-full bg-teal-800 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm font-semibold">{item.institution}</p>
                  <p className="text-sm font-semibold">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-2xl font-semibold bg-teal-800 w-36 text-center mb-10 text-white p-2 rounded-md">
            Experience
          </p>
          <div className="absolute h-16 border-l-4 border-teal-800 left-2 transform -translate-x-1/2 top-23"></div>

          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div className="w-4 h-4 rounded-full bg-teal-800 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm font-semibold">{item.institution}</p>
                  <p className="text-sm font-semibold">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Award Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <p className="text-2xl font-semibold bg-teal-800 w-36 text-center mb-10 text-white p-2 rounded-md">
            Awards
          </p>
          <div className="absolute h-64 border-l-4 border-teal-800 left-2 transform -translate-x-1/2 top-23"></div>
          <div className="space-y-6">
            {awardData.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div className="w-4 h-4 rounded-full bg-teal-800 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm font-semibold">{item.year}</p>
                  <p className="text-sm font-semibold">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
