import React, { useState, useEffect } from "react";

export default function Comment({ filmId }) {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const url = `https://staremovieapp.herokuapp.com/apiv1/comments/${filmId}`;
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });
    let userData = await response
      .json()
      .then((val) => {
        return val;
      })
      .then((data) => {
        setComments(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <h2>Comments:</h2>
      {comments.length > 0 ? (
        comments.map((item, index) => {
          return (
            <div className="comment-badge" key={index}>
              <p>{item.created_at}</p>
              <p>{item.comment}</p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
