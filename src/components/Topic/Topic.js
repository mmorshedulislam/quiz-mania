import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div className="col-md-6">
      <Card className="bg-dark text-white" border="primary" style={{ width: "75%", margin: "0 auto" }}>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <img src={logo} className="img-fluid rounded rounded-circle" alt={name} />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Title className="mt-3">{name}</Card.Title>
              <Card.Text>Total Quiz: {total}</Card.Text>
            </div>
            <div>
              <Link to={`/quiz/${id}`}>
                <button className="btn btn-primary">Start Quiz</button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topic;
