import React from "react";
import { useLoaderData } from "react-router-dom";
import Intro from "../Intro/Intro";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData().data;

  console.log(topics);
  return (
    <div className="container">
      <Intro />

      <div className="row g-4 mb-5">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
