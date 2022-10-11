import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizOption from "../QuizOption/QuizOption";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const questions = quiz.questions;
  console.log(questions);

  return (
    <div className="container">
      <h2 className="text-center my-5"> Quiz of {quiz.name}</h2>
      <div className="row g-4">
        {questions.map((question) => (
          <QuizOption key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
