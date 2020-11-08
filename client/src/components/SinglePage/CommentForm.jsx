import React, { useState } from "react";

export default function CommentForm({ id }) {
  const [inputData, setInputData] = useState({ name: "", comment: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="new-comment" onSubmit={handleSubmit}>
      <p>Add Comment</p>
      <input
        placeholder="Enter your name"
        name="name"
        value={inputData.name}
        className="comment-Author"
        type="text"
        onChange={handleChange}
      />
      <textarea
        placeholder="Type your comment here"
        name="comment"
        value={inputData.comment}
        className="comment-body"
        onChange={handleChange}
      ></textarea>

      <button className="add-comment-btn">Submit Comment</button>
    </form>
  );
}
