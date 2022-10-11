import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const data = [
    {
      id: 1,
      title: "What is the purpose of React Router?",
      description:
        "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL",
    },
    {
      id: 2,
      title: "What does Context API works?",
      description:
        "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
    },
    {
      id: 3,
      title: "What is useRef?",
      description:
        "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center my-5">Blogs</h2>
      <div className="row g-4">
        {data.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
