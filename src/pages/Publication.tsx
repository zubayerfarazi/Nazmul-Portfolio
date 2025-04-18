import { AiOutlineFileText } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const PublicationCard = ({ publication }) => {
  return (
    <div className="bg-gradient-to-r via-teal-200 to-teal-300 border border-teal-200 text-gray-900 rounded-2xl p-6 shadow-sm transition duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-teal-100 p-2 rounded-full">
          <AiOutlineFileText size={24} className="text-teal-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 leading-snug">
          {publication.title}
        </h3>
      </div>
      <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
        {publication.publisher}
      </span>

      <div className="text-center">
      {publication.doi && (
        <a
          href={`https://doi.org/${publication.doi.replace(/^https:\/\/doi.org\//, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg bg-teal-800 hover:bg-teal-700 rounded-md py-1 w-40 text-white font-medium inline-flex justify-center items-center gap-1"
        >
          View DOI <FiExternalLink size={16} />
        </a>
      )}
      </div>
    </div>
  );
};

const Publication = () => {

  const publications = [
    {
      title: "Dataset for Smart Precision Agriculture System in Bangladesh",
      doi: "10.21227/5j31-8a73",
      publisher: "IEEE",
    },
    {
      title: "Artificial Intelligence Based Precision Agriculture System",
      doi: "10.1007/978-981-97-3937-0_39",
      publisher: "Springer",
    },
    {
      title: "Blockchain Based Decentralized Smart City Components Analysis",
      doi: "https://doi.org/10.34218/IJBT_03_01_001",
      publisher: "International Journal of Blockchain Technology",
    },
  ];

  return (
    <div id="publication" className="p-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-center text-gray-800">My Publications</h2>
        <p className="text-gray-600">Research works and academic contributions</p>
      </div>

      {/* Publication Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </div>
    </div>
  );
};

export default Publication;
