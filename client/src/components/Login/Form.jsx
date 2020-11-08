import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Error, FormLogin, FormNav } from "./LoginElements";
import Button from "./Button";

export const validateInput = (str = "") => str.includes("@");

const Form = ({ handleSubmit }) => {
  const [FormData, setFormData] = useState({});
<<<<<<< HEAD
  // const [submit, setSubmit] = useState(false);
=======
  // const [password, setPasssword] = useState("99999999")
>>>>>>> b79f85d902d722441a3586dd0bfae483a92550d7
  const { push } = useHistory();
  const handleOnChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

<<<<<<< HEAD
  console.log("Email:", FormData.email);
  console.log("Email:", FormData.password);
  const onClick = (e) => {
    e.preventDefault();
    let user = loginUser();
    console.log(user);
=======
  // const handleOnChange1 = (e)=>{
  //   e.preventDefault();
  //   setPasssword((p)=> e.target.value)
  // }

  const onClick = async (e) => {
    e.preventDefault();
    console.log(FormData.email);

    const url = "http://localhost:3000/apiv1/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",

      body: JSON.stringify({
        email: FormData.email,
        password: FormData.password,
      }),
    });
    console.log(response.json());
    response.json();

>>>>>>> b79f85d902d722441a3586dd0bfae483a92550d7
    push("/");
  };

  // useEffect(() => {
  //    getUser();
  //   }, []);

  const loginUser = async () => {
    let email = FormData.email;
    let password = FormData.password;
    const response = await fetch("/apiv1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  };

  return (
    <>
      <FormNav>
        <nav className="RegisterContainer-nav">
          <NavLink className="RegisterContainer-logo" to="/">
            <img src="./favicon-32x32.png" className="logo-img" alt="logo" />{" "}
            STARE
          </NavLink>
          <div className="auth-nav">
            <NavLink className="user-nav" to="/register">
              Sign Up
            </NavLink>
          </div>
        </nav>
      </FormNav>

      <FormLogin name="login-form" onSubmit={handleSubmit}>
        <div className="logo">
          <img src="./favicon-32x32.png" alt="logo"></img>
          <h1>Stare</h1>
        </div>
        <div className="heading">Log in</div>
        <div>
          <input
            id="email"
            name="email"
            type={"email"}
            placeholder="Email"
            onChange={handleOnChange}
            className="form-input"
          />
        </div>
        {FormData.email && !validateInput(FormData.email) ? (
          <Error>Email not valid</Error>
        ) : null}
        <div>
          {" "}
          <input
            name="password"
            type={"password"}
            placeholder="Password"
            className="form-input"
            onChange={handleOnChange}
<<<<<<< HEAD
=======
            // onChange={e => setPasssword(e.target.value)}
            // value={password}
>>>>>>> b79f85d902d722441a3586dd0bfae483a92550d7
          />
        </div>
        <Button buttonName="Log In" onClick={onClick} />
      </FormLogin>
    </>
  );
};

export default Form;
