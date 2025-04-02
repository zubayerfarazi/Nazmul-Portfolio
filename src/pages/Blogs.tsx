
const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hyperledger Fabric: Secure Blockchain for Enterprises",
      description: "Learn how Hyperledger Fabric enhances security, privacy, and efficiency in business applications.",
      image: "./images/blockchain.jpg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7297058049733599235/"
    },
    {
      id: 2,
      title: "Types of Blockchain & Their Features",
      description: "Explore Public, Private, Consortium, Hybrid, and Sidechain blockchains with a quick comparison.",
      image: "./images/blockchain2.png",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7296529933235802112/"
    },
  ];
  

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-gray-800">My Blogs</h2>
      <p className="text-center text-gray-600 mb-12">Posts I have shared on development and technology.</p>

      {/* Blog List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 cursor-pointer hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-fit px-2 py-2 rounded-t-lg"
            />

            {/* Content */}
            <div className=" p-3 flex flex-col justify-between space-y-4">
              <h3 className="text-2xl font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              <a 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 px-6 py-2 bg-teal-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-teal-500 transition-colors"
              >
                Read More
              </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
