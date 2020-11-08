import React from "react";

export default function Comment({ comments }) {
  console.log(comments[0].name);
  return (
    <>
      <h2>Comments:</h2>
      {comments.map((item, index) => {
        return (
          <div className="comment-badge" key={index}>
            <p>By: {item.name}</p>
            <p>Comment: {item.body}</p>
          </div>
        );
      })}
    </>
  );
}
