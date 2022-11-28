import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Create-News.css";


export const CreateNews = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    author: "",
    email: "",
    title: "",
    news: "",
  });

  const initialState = {
    author: "",
    email: "",
    title: "",
    news: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {
    if (!data.author || !data.email || !data.title || !data.news) {
      setMessage("Please, fill the fields");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Sending data..." +
        data.author +
        " " +
        data.date +
        " " +
        data.title +
        " " +
        data.news
    );
    localStorage.setItem("news", JSON.stringify(data));
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 3000);
    setVisible(false);
  };

  return (
    <>
      <h1 className="title">Post an Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="create-news_container">
        <p>Author</p>
        <input
          type="text"
          placeholder="Your name here"
          value={data.author}
          onChange={handleInputChange}
          name="author"
        />
        <br />
        <p>Email</p>
        <input
          type="text"
          placeholder="Your email here"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <br />
        <p>Title</p>
        <input
          type="text"
          placeholder="Put the title news here"
          value={data.title}
          onChange={handleInputChange}
          name="title"
        />
        <br />
        <p>Body</p>
        <input
          type="text"
          placeholder="Write the body news here"
          value={data.news}
          onChange={handleInputChange}
          name="news"
        />
        <p>
          <button type="submit" disabled={btnDisabled}>
            Send
          </button>
        </p>
      <p className="msg">{visible ? message : "Thanks for your article :)"}</p>
        </div>
      </form>
    </>
  );
};

export default CreateNews;
