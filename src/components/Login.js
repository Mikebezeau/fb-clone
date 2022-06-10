import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../state/reducer";
import { useStateValue } from "../state/StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
          alt="Facebook"
        />
      </div>
      <div className="login_main">
        <button className="login_button" type="submit" onClick={signIn}>
          Log In
        </button>
        <p>Please wait for pop-up to load after clicking.</p>
      </div>
    </div>
  );
}

export default Login;
