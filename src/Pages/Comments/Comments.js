import axios from "axios";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import auth from "../../Firebase/Firebase.init";
import useDataLoad from "../../Hooks/useDataLoad";
import "./Comments.css";
const Comments = () => {
  const [user] = useAuthState(auth);
  const url = `https://car-rev-server.onrender.com/comment`;

  const { data, setData, setUpdate, update } = useDataLoad(url);

  const handleComment = async (event) => {
    event.preventDefault();
    const userName = user.displayName;
    const text = event.target.comment.value;
    const comment = { userName, text };
    //
    const url = `https://car-rev-server.onrender.com/comment`;
    await axios.post(url, comment);
    setUpdate(!update);
    event.target.reset();
  };

  const handleDelete = async (id) => {
    const processed = window.confirm("Are you sure want to delete?");
    if (processed) {
      const url = `https://car-rev-server.onrender.com/comment/${id}`;
      await axios.delete(url);

      const remaining = data.filter((comment) => comment._id !== id);
      setData(remaining);
      setUpdate(!update);
    }
  };

  return (
    <div className="commnets-container" data-aos="fade-up">
      <h5 className="text-center">Write your comments</h5>
      <hr />
      <div>
        <ul>
          {data.map((comment) => (
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
                    onClick={() => handleDelete(comment?._id)}
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
