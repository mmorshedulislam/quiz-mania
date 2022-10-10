import React from "react";

const Intro = () => {
  return (
    <div className="container card my-4">
      <div className="row my-4">
        <div className="col-md-2 offset-md-2">
          <img
            src="https://www.shim.co.in/quiz/qt.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h2>Test of Knowledge</h2>
          <p>
            Test your skills by taking more quizzes. Do the quiz below quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
