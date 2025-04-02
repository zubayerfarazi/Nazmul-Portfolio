const PublicationCard = ({ publication }) => {
  return (
    <div className=" rounded-lg shadow-lg p-6 bg-teal-300 hover:shadow-2xl transition duration-300 cursor-pointer">
      <h3 className="text-xl font-bold">{publication.title}</h3>
      <p className="text-md">{publication.publisher}</p>
      {publication.doi && (
        <a
          href={`https://doi.org/${publication.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-teal-800 font-medium mt-2 inline-block"
        >
          View DOI
        </a>
      )}
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
    <div className="p-8">
      {/* Header */}
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
