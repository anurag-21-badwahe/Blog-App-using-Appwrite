"use client";
import { Client, Databases, ID } from "appwrite";
import { useState, useEffect } from "react";

export default function Home() {
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65ce445e579347c4d7a6");

  const databases = new Databases(client);
  let data = [
    {
      title: "Introduction to Python Programming",
      content: "Python is a versatile and powerful programming language...",
      slug: "python",
      views: 1000,
      author: "Anurag Badwahe",
      isPublish: true,
    },
    {
      title: "JavaScript Fundamentals",
      content:
        "JavaScript is a high-level, interpreted programming language...",
      slug: "javascript-fundamentals",
      views: 850,
      author: "Jane Smith",
      isPublish: true,
    },
    {
      title: "Getting Started with HTML and CSS",
      content: "HTML and CSS are fundamental building blocks of the web...",
      slug: "html-css",
      views: 1200,
      author: "John Doe",
      isPublish: true,
    },
    {
      title: "Java Basics",
      content: "Java is a class-based, object-oriented programming language...",
      slug: "java-basics",
      views: 750,
      author: "Emily Jones",
      isPublish: true,
    },
    {
      title: "C++ Crash Course",
      content: "C++ is a powerful and efficient programming language...",
      slug: "cplusplus-crash-course",
      views: 980,
      author: "David Brown",
      isPublish: true,
    },
    {
      title: "Ruby on Rails Essentials",
      content:
        "Ruby on Rails is a web application framework written in Ruby...",
      slug: "ruby-on-rails-essentials",
      views: 900,
      author: "Sarah Johnson",
      isPublish: true,
    },
    {
      title: "React.js Basics",
      content:
        "React.js is a JavaScript library for building user interfaces...",
      slug: "reactjs-basics",
      views: 1100,
      author: "Michael Lee",
      isPublish: true,
    },
    {
      title: "SQL Fundamentals",
      content:
        "SQL is a standard language for accessing and manipulating databases...",
      slug: "sql-fundamentals",
      views: 800,
      author: "Sophia Martinez",
      isPublish: true,
    },
    {
      title: "PHP for Beginners",
      content:
        "PHP is a server-side scripting language designed for web development...",
      slug: "php-for-beginners",
      views: 950,
      author: "William Johnson",
      isPublish: true,
    },
    {
      title: "Introduction to Data Structures",
      content: "Data structures are a way of organizing and storing data...",
      slug: "data-structures-intro",
      views: 1050,
      author: "Emma Wilson",
      isPublish: true,
    },
    {
      title: "Swift Programming Basics",
      content: "Swift is a powerful and intuitive programming language...",
      slug: "swift-basics",
      views: 870,
      author: "Christopher Taylor",
      isPublish: true,
    },
    {
      title: "Introduction to Node.js",
      content:
        "Node.js is an open-source, cross-platform JavaScript runtime environment...",
      slug: "nodejs-intro",
      views: 920,
      author: "Olivia Brown",
      isPublish: true,
    },
    {
      title: "Angular Essentials",
      content:
        "Angular is a platform and framework for building single-page client applications...",
      slug: "angular-essentials",
      views: 980,
      author: "Daniel Wilson",
      isPublish: true,
    },
    {
      title: "Python Web Development with Django",
      content:
        "Django is a high-level Python web framework that encourages rapid development...",
      slug: "python-django-webdev",
      views: 1100,
      author: "Ava Johnson",
      isPublish: true,
    },
    {
      title: "Introduction to Machine Learning",
      content: "Machine learning is a subset of artificial intelligence...",
      slug: "machine-learning-intro",
      views: 1150,
      author: "Ethan Davis",
      isPublish: true,
    },
  ];

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const promise = databases.createDocument(
      "65cf02b601aaf91443b5",
      "65cf02cb9cf2f8742b76",
      ID.unique(),
      element
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }
  return <div></div>;
}
