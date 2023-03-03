import React from "react";
import { Container, ProgressBar, Row } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import useDataLoad from "./../../../Hooks/useDataLoad";
import Loading from "./../../Shared/Loading/Loading";
import CreateReview from "./CreateReview";
import Review from "./Review";

import "./reviews.css";

const Reviews = () => {
    const navigate = useNavigate();
    const url = "https://car-rev-server-2023.onrender.com/api/v1/reviews";
    const { data, loading, update, setUpdate } = useDataLoad(url);
    const sliceReviews = data.slice(0, 3);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            {data.length > 0 && <Container className="reviews-container py-3">
                <h2 className="section-title text-center">Testimonial</h2>
                <h4 className="text-center">Ratings and reviews</h4>
                <div className="w-50 mx-auto">
                    <h1 className="display-1 fw-bold">4.4</h1>
                    <p className="star-container">
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStarHalfAlt className="star" />
                    </p>
                    <small>9,6,93,354</small>
                </div>
                <div className="w-50 mx-auto">
                    <ul>
                        <li>
                            <span className="fw-bold">5</span>
                            <ProgressBar variant="primary" now={60} />
                        </li>
                        <li>
                            <span className="fw-bold">4</span>
                            <ProgressBar variant="primary" now={25} />
                        </li>
                        <li>
                            <span className="fw-bold">3</span>
                            <ProgressBar variant="primary" now={20} />
                        </li>
                        <li>
                            <span className="fw-bold">2</span>
                            <ProgressBar variant="primary" now={5} />
                        </li>
                        <li>
                            <span className="fw-bold">1</span>
                            <ProgressBar variant="primary" now={10} />
                        </li>
                    </ul>
                </div>
                <Row>
                    {sliceReviews.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
                </Row>
                <div className="text-end">
                    <button
                        onClick={() => navigate("/reviews")}
                        className="update-btn mb-3"
                    >
                        See all Reviews
                    </button>
                </div>
                <CreateReview update={update} setUpdate={setUpdate} />
            </Container>}
        </>

    );
};

export default Reviews;
