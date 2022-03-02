import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPost from "../../components/postModal/ModalAddPost";

import Posts from "../../components/posts/Posts";
import PagePagination from "../../components/pagePagination/PagePagination";

export default function PostPageView({ apiService }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsCount, setPostsCount] = useState(0);

  const postsPerPage = 7;

  const idxOfLastPost = currentPage * postsPerPage;
  const idxOfFirstPost = idxOfLastPost - postsPerPage;
  const limitedPosts = posts.slice(idxOfFirstPost, idxOfLastPost);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    const response = await apiService.getAllPosts();

    setPosts(response);
    setPostsCount(response.length);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <>
      {posts &&
        limitedPosts.map((post) => (
          <Posts key={post.id} post={post} handlePostClick={handlePostClick} />
        ))}
      {postsCount > postsPerPage && (
        <PagePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          postsCount={postsCount}
          postsPerPage={postsPerPage}
        />
      )}
      <AddPost />
    </>
  );
}
