import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config"; // ✅ import BASE_URL

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [cursorStyle, setCursorStyle] = useState("default");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoggingIn(true);

      const response = await axios.post(
        `${BASE_URL}/signup`,
        { email, password, username },
        { withCredentials: true }
      );

      setLoggingIn(false);
      setMessage(response.data.message);

      setTimeout(() => {
        setMessage("");
      }, 10000);

      // ✅ If signup success, go to signin page
      if (response.status === 201) {
        navigate("/signin");
      }
    } catch (error) {
      console.error(error);
      setLoggingIn(false);
      setMessage("Sign Up failed!");
    }
  };

  return (
    <div className="container text-center p-5">
      <div className="row">
        <h1 style={{ fontSize: "3rem", opacity: "0.85", marginTop: "5rem" }}>
          Open a free demat and trading account
        </h1>

        <h3
          style={{
            opacity: "0.85",
            fontSize: "1.3rem",
            lineHeight: "1.8rem",
            marginBottom: "2.5rem",
            fontWeight: "400",
          }}
        >
          Start investing brokerage free and join a community of 1+ crore
          investors and traders
        </h3>
      </div>

      <div className="row p-5">
        <div className="col-6 p-5">
          <img
            style={{ height: "47vh", width: "35vw", margin: "0 auto" }}
            src="media/images/account_open.png"
            alt="logo"
          />
        </div>

        <div className="col-6">
          <h2
            className="p-3 mt-5"
            style={{
              opacity: "0.92",
              fontSize: "1.9rem",
              lineHeight: "0rem",
              fontWeight: "550",
            }}
          >
            Signup now
          </h2>

          <Link
            to="/signin"
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            style={{
              opacity: "0.85",
              fontSize: "1.2rem",
              fontWeight: "400",
              cursor: cursorStyle,
            }}
            className="mb-5"
          >
            Have an account?{" "}
            <span style={{ color: "blue", opacity: "0.7" }}>Sign In ...</span>
          </Link>

          <form
            onSubmit={handleSignUp}
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              width: "17rem",
              gap: "0.8rem",
              marginLeft: "8.5rem",
            }}
          >
            <input
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                height: "2.3rem",
                marginLeft: "1rem",
                padding: "1rem",
              }}
              type="email"
              placeholder="  Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                height: "2.3rem",
                marginLeft: "1rem",
                padding: "1rem",
              }}
              type="text"
              placeholder="  Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                height: "2.3rem",
                marginLeft: "1rem",
                padding: "1rem",
              }}
              type="password"
              placeholder="  Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {message && (
              <div style={{ color: "red", opacity: "0.85" }}>{message}</div>
            )}

            <button
              type="submit"
              className="opacity-75 p-2 mt-3 btn btn-primary fs-5 mb-5"
              style={{ width: "110%", margin: "0 auto" }}
              disabled={loggingIn}
            >
              {loggingIn ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "Sign up ..."
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="row small text-muted lh-1">
        <p>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN.
        </p>
        <p>Please visit this article to know more.</p>
        <p>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms. For help, click here.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
