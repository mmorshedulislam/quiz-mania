import React from "react";
import { Card } from "react-bootstrap";

const Blog = ({ blog }) => {
  return (
    <div className="col-md-4">
      <Card border="primary">
        <Card.Header className="h4">{blog.title}</Card.Header>
        <Card.Body>
          <Card.Text>{blog.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
