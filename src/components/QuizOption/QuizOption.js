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

  const handleCorrect = (question) => {
    toast(`Correct Answer is : ${question.correctAnswer}`);
  };

  return (
    <div className="col-md-6">
      <div className="border border-primary rounded p-4 w-100 mx-auto my-3">
        {/* Quiz Question */}
        <div className="d-flex justify-content-between">
          <h4 className="text-center">{question.question}</h4>
          <div>
            <span onClick={() => handleCorrect(question)} className="fs-5 ms-3">
              <i class="fa-solid fa-eye-slash"></i>
            </span>
          </div>
        </div>
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
