import React, { useState } from "react";
import "./Login.css";
// import { auth } from "../src/firebase";
import { Link, useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // Signed in
        // console.log(authUser);

        if (authUser) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // console.log(authUser);
        if (authUser) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <h1 className="login__logo">E-Shop</h1>
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="Enter your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter your password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>By signing-in you agree to our terms and conditions.</p>
        <button onClick={register} className="login__registerButton">
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
