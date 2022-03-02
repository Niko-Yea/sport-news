import { useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function AddComment() {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const resetState = () => {
    setComment("");
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    //some  dispatch
    console.log("comment was send");
    console.log(comment);
    setShow(false);
    resetState();
  };

  return (
    <>
      <Button
        variant="primary"
        className={styles.addCommentBtn}
        onClick={handleShow}
      >
        Add comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comment"
            onChange={handleChange}
          >
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
