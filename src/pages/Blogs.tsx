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
    <div id="blogs" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800">My Blogs</h2>
      <p className="text-center text-gray-600 mb-12">Posts I have shared on development and technology.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-500 cursor-pointer"
          >
            <div className="relative group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-36 object-fill transition-transform duration-500 group-hover:scale-105 rounded-t-lg"
              />
            </div>

            <div className="p-6 flex flex-col justify-between space-y-4 bg-teal-100">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600 text-lg line-clamp-2">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-teal-600 text-white text-center font-semibold rounded-lg shadow-md hover:bg-teal-500 transform transition-all duration-300 hover:scale-105"
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
