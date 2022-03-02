import { Button, Card } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function Posts({ post, handlePostClick }) {
  return (
    <Card className={styles.article}>
      <Card.Body>
        <Card.Title className={styles.titlePost}>{post.title}</Card.Title>
        <div className="d-grid gap-2 d-md-flex justify-content-end">
          <Button onClick={() => handlePostClick(post.id)}>
            Learn more...
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
