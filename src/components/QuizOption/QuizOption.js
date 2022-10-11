import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "./QuizOption.css";
import "react-toastify/dist/ReactToastify.css";

const QuizOption = ({ question }) => {
  const handleOnChange = (event) => {
    const value = event.target.value;
    if (question.correctAnswer === value) {
      toast.success("Correct!", {
        autoClose: 2000,
      });
    } else {
      toast.error("Wrong Answer!", {
        autoClose: 2000,
      });
    }
  };
  return (
    <div>
      <div className="border border-primary rounded p-4 w-50 mx-auto my-3">
        {/* Quiz Question */}
        <h4 className="text-center">{question.question}</h4>
        {/* Quiz Options */}
        <div>
          {question.options.map((option) => (
            <p option={option} className="border border-info p-2 rounded my-2">
              <input
                onChange={(event) => handleOnChange(event)}
                type="radio"
                value={option}
                name={question.id}
              />{" "}
              {option}
            </p>
          ))}
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default QuizOption;
