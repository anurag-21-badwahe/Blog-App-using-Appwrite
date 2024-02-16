"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { Client, Databases } from "appwrite";

const Home = () => {
  const client = new Client();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65ce445e579347c4d7a6");
    const databases = new Databases(client);

    const promise = databases.listDocuments(
      "65cf02b601aaf91443b5",
      "65cf02cb9cf2f8742b76",
      []
    );

    promise.then(
      function (response) {
        console.log(response);
        setBlogs(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 pd-5">
        <div className="text-3xl font-bold mb-6">
          <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {blogs.length === 0 && <p>Loading...</p>}
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
