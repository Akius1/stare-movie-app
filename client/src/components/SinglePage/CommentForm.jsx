import React, { useState, useContext } from "react";
import { UserData } from "./../Login/UserData";
//import filmData from "./../LandingPage/filmData"

export default function CommentForm({ id }) {
  const { userInfo, SetUserInfo } = useContext(UserData);

  const [inputData, setInputData] = useState("");
  const [errorClass, setErrorClass] = useState("hideError");

  function handleChange(event) {
    const { value } = event.target;
    setInputData(value);
  }

  const url = "http://localhost:3000/apiv1/addcomment";

  async function handleSubmit(event) {
    event.preventDefault();
    //Handle post request
    if (!userInfo.user) {
      setErrorClass("showError");
    } else {
      setErrorClass("hideError");
      //Submit comment

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",

        body: JSON.stringify({
          films_id: FormData.email,
          comment: inputData,
          user_id: userInfo.id,
        }),
      });

      let data = await response.json().then((val) => {
        return val;
      });
    }
  }

  return (
    <form className="new-comment" onSubmit={handleSubmit}>
      <p>Add Comment</p>
      {/* <input
        placeholder="Enter your name"
        name="name"
        value={inputData.name}
        className="comment-Author"
        type="text"
        onChange={handleChange}
      /> */}
      <textarea
        placeholder="Type your comment here"
        name="comment"
        value={inputData.comment}
        className="comment-body"
        onChange={handleChange}
      ></textarea>
      <span className={errorClass}>You need to log in first</span>

      <button className="add-comment-btn">Submit Comment</button>
    </form>
  );
}
