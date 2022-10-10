import React from "react";
import "./QuizOption.css";

const QuizOption = ({ question }) => {
  return (
    <div>
      <div className="border border-primary rounded p-4 w-50 mx-auto my-3">
        <h4 className="text-center">{question.question}</h4>

        <div>
          {question.options.map((option) => (
            <p option={option} className="border border-info p-2 rounded my-2">
              <input type="radio" value={option} name={question.id} /> {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
