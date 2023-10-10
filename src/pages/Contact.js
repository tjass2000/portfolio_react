import React, { useState } from "react";
import Axios from "axios";
import { Loader } from "../misc/Loader";
import { toast } from "react-toastify";

export const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [spinner, setSpinner] = useState("false");
  const handleSubmit = (e) => {
    setSpinner("true");
    e.preventDefault();
    const users = {
      name: userName,
      email: userEmail,
      subject: userSubject,
      message: userMessage,
    };
    //Using Axios
    if (userName === "" || userEmail === "" || userSubject === "") {
      setSpinner("false");
    } else {
      Axios.post("https://portfolio-post-user.onrender.com/post", users)
        .then((res) => {
          setSpinner("false");

          toast.success("Details saved successfully!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setUserName("");
          setUserEmail("");
          setUserSubject("");
          setUserMessage("");

          var homeEle = document.getElementById("#home");
          homeEle.scrollIntoView({ behavior: "smooth" });
          console.log(res.data);
        })
        .catch((err) => {
          setSpinner("false");
          toast.error("Unable to store details!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(err);
        });
    }
    //Using javascript fetch
    // fetch("https://portfolio-post-user.onrender.com/post", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json; charset=utf-8",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(users),
    // }).then((res) => {
    //   console.log(res);
    //   // toast.success("Thanks for filling the form!!");
    // });
  };
  return (
    <div className="contactContainer" id="#contact">
      <div className="contactText">
        <h5>CONTACT —</h5>
        <h2>Let's Connect 🌐</h2>
      </div>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type={"text"}
            placeholder="Enter your name..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          ></input>
          <label>Your email</label>
          <input
            type={"email"}
            placeholder="Enter your email..."
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          ></input>
          <label>Your subject</label>
          <input
            type={"text"}
            placeholder="Enter your subject..."
            value={userSubject}
            onChange={(e) => setUserSubject(e.target.value)}
            required
          ></input>
          <label>Your message(Optional)</label>
          <textarea
            rows={"10"}
            placeholder="Enter your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <button type="submit">
            {spinner === "true" ? <Loader /> : <div>SEND</div>}
          </button>
        </form>
      </div>
    </div>
  );
};
//Create form and link to mysql
