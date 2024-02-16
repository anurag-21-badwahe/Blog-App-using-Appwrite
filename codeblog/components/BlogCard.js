import React from "react";

const BlogCard = ({ title, author, metaDesc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{metaDesc}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">{`By ${author}`}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
