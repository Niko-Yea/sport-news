import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../../components/commentModal/modalAddComment";

import styles from "./styles.module.scss";

export default function OnePostView({ apiService }) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const fetchOnePostWithComments = async () => {
    const postsResponse = await apiService.getOnePost(postId);
    setPost(postsResponse);

    const commentResponse = await apiService.getComments(postId);
    setComments(commentResponse);
  };
  useEffect(() => {
    fetchOnePostWithComments();
  }, []);

  return (
    <>
      {post && (
        <div className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
      <div className={styles.comments}>
        <h2 className={styles.title}>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <h4 className={styles.author}>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <AddComment className={styles.addCommentBtn} />
    </>
  );
}
