import { useState } from "react";
import Post from "./Post";

function Board() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(1);

  const handlePost = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력하세요.");
      return;
    }

    const newPost = {
      id: id,
      title,
      content,
      comment: []
    };
    
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
    setId(id + 1);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleAddComment = (postId, newComment) => {
    setPosts(posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = Array.isArray(post.comments) ? [...post.comments, newComment] : [newComment];
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>게시판</h1>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br/>
      <button onClick={handlePost}>게시</button>
      <br/>
      <input
        type="text"
        placeholder="검색"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredPosts.map((post) => (
          <Post 
            key={post.id}
            post={post}
            onDelete={handleDelete}
            onAddComment={handleAddComment}
          />
        ))}
      </ul>
    </div>
  );
}

export default Board;