import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    name: "",
    phone: "",
    date: "",
    hour: "",
  });


const initialState = {
    name: "",
    phone: "",
    date: "",
    hour: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {

    if (!data.name || !data.phone || !data.date || !data.hour) {
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
    console.log("Sending data..." + data.name + " " + data.phone+ " " + data.date+ " " + data.hour);
    localStorage.setItem("reserva",JSON.stringify(data))
    clearState();
    setTimeout(() => {
        navigate('/')
    }, 3000);
    setVisible(false)
  };

  return (
    
    <>
    
      <div>Book a table</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name here"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="Your phone here"
          value={data.phone}
          onChange={handleInputChange}
          name="phone"
        />
        <br />
        <input
          type="text"
          placeholder="Put the booking date here"
          value={data.date}
          onChange={handleInputChange}
          name="date"
        />
        <br />
         <input
          type="text"
          placeholder="Put the booking hour here"
          value={data.hour}
          onChange={handleInputChange}
          name="hour"
        />
        <button type="submit" disabled={btnDisabled}>
          Send
        </button>
      </form>
      <p>{visible ?message :'Thanks for choosing theKano delicatesen :)'}</p>
    
    </>
   
  );
};

export default Contact;