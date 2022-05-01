import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import "./Comments.css";
const Comments = () => {
  const handleComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    console.log(comment);
    event.target.reset();
  };
  return (
    <div className="commnets-container" data-aos="fade-up">
      <h5 className="text-center">Write your comments</h5>
      <hr />
      <div>
        <ul>
          <li className="d-flex justify-content-between mb-2">
            <div>
              <h6>user name</h6>
              <p>This is awesome post</p>
            </div>
            <div>
              <button className="delete-btn">
                <FaTrashAlt />
              </button>
            </div>
          </li>
        </ul>
      </div>

      <Form onSubmit={handleComment}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="comment here ..."
          className="mb-3"
        >
          <Form.Control
            name="comment"
            as="textarea"
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        <button type="submit" className="btn btn-primary d-block ms-auto w-50">
          Comment
        </button>
      </Form>
    </div>
  );
};

export default Comments;
