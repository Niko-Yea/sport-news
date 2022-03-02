export default class JsonPlaceholderApi {
  constructor() {
    this.currentPage = 0;
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  async getAllPosts() {
    try {
      const response = await fetch(`${this.baseUrl}/posts`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getOnePost(postId) {
    try {
      const response = await fetch(`${this.baseUrl}/posts/${postId}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getComments(postId) {
    try {
      const response = await fetch(`${this.baseUrl}/posts/${postId}/comments`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
