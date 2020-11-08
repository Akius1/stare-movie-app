import React, { useState } from "react";
//import filmData from "./../LandingPage/filmData";

export default function CommentForm({ id }) {
  //console.log(id)

  //const theData = filmData.find((item) => item._id === id);

  const [inputData, setInputData] = useState({ name: "", comment: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    //Handle post request
  }

  // useEffect(()=>{
  //     console.log(inputData)
  // },[inputData])

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
