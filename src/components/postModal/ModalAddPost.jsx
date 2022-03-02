import { useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function AddPost() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const resetState = () => {
    setTitle("");
    setPost("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "title":
        setTitle(value);
        break;

      case "post":
        setPost(value);
        break;

      default:
        break;
    }
    setPost(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    //some dispatch
    console.log("post was send");
    console.log(title);
    console.log(post);
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
        Add post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            className="mb-3"
            controlId="title"
            onChange={handleChange}
          >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <FloatingLabel controlId="post" label="Post" onChange={handleChange}>
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
