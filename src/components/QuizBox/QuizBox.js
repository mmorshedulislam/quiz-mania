import React from "react";
import { Card } from "react-bootstrap";

const QuizBox = ({ topic }) => {
  const { logo, name, total } = topic;
  return (
    <div className="col-md-6">
      <Card border="primary" style={{ width: "75%", margin: '0 auto' }}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <img src={logo} className="img-fluid" alt={name} />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Title className="mt-3">{name}</Card.Title>
              <Card.Text>Total Quiz: {total}</Card.Text>
            </div>
            <div>
              <button className="btn btn-primary">Start Quiz</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuizBox;
