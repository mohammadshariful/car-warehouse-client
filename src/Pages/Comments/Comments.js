import axios from "axios";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import useDataLoad from "../../Hooks/useDataLoad";
import "./Comments.css";
const Comments = () => {
  const url = `http://localhost:5000/comment`;
  const { loadData, setLoadData, setUpdate } = useDataLoad(url);

  const handleComment = async (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const text = event.target.comment.value;
    const comment = { userName, text };
    //
    const url = `http://localhost:5000/comment`;
    const { data } = await axios.post(url, comment);
    event.target.reset();
  };

  const handleDelete = async (id) => {
    const url = `http://localhost:5000/comment/${id}`;
    const confirm = window.confirm("Are you sure want to delete?");
    if (confirm) {
      const { data } = await axios.delete(url);
      if (data.acknowledged) {
        const remaining = loadData.filter((comment) => comment._id !== id);
        setLoadData(remaining);
        setUpdate(true);
      }
    }
  };

  return (
    <div className="commnets-container" data-aos="fade-up">
      <h5 className="text-center">Write your comments</h5>
      <hr />
      <div>
        <ul>
          {loadData.map((comment) => (
            <>
              <li
                key={comment?._id}
                className="d-flex justify-content-between mb-2"
              >
                <div>
                  <div>
                    <FaUser className="user" />
                    <span className="fw-bold ms-2">{comment?.userName}</span>
                  </div>
                  <p>{comment?.text}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="delete-btn"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>

      <Form onSubmit={handleComment}>
        <Form.Group className="mb-2" controlId="name">
          <Form.Control
            name="userName"
            type="text"
            placeholder="User Name"
            required
          />
        </Form.Group>
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
