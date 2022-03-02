import PostsPageView from "./views/postPageView/PostsPageView";
import OnePostView from "./views/onePostView/OnePostView";
import "bootstrap/dist/css/bootstrap.min.css";

import JsonPlaceholderApi from "./service/json-placeholder-api";

import "normalize.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { Container } from "react-bootstrap";

const apiService = new JsonPlaceholderApi();

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<PostsPageView apiService={apiService} />} />
          <Route
            path="/post/:postId"
            element={<OnePostView apiService={apiService} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
