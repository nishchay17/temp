import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { createUserReview } from "../actions/reviewActions";
import { USER_CREATE_REVIEW_RESET } from "../constants/reviewConstants";

const CreateReviewScreen = ({ match }) => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userReview = useSelector((state) => state.userReview);
  const { success: successReview, error: errorReview, reviews } = userReview;
  console.log(reviews);
  useEffect(() => {
    if (successReview) {
      alert("Your experience has been added!");
      setType("");
      setDescription("");
      dispatch({ type: USER_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successReview]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ type, description });
    dispatch(
      createUserReview({
        type,
        description,
      })
    );
  };

  return (
    <div className="reviews">
      <Row>
        <Col md={6}>
          <h1>Experiences</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>{reviews?.name}</strong>
              <p>{reviews?.type}</p>
              <p>{reviews?.description}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Write your thrilling experience</h2>
              {errorReview && <Message variant="danger">{errorReview}</Message>}
              {userInfo ? (
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="type">
                    <Form.Label>Category of Adventure Sport:</Form.Label>
                    <Form.Control
                      type="type"
                      row="2"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      as="textarea"
                      row="5"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form>
              ) : (
                <Message>
                  Please <Link to="/login">sign in</Link> to write a review{" "}
                </Message>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CreateReviewScreen;
