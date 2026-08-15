import { useState } from "react";
import Card from "./Card";

export default function Form({
  children,
  showCard,
  setShowCard,
  name,
  email,
  setName,
  setEmail,
}) {
  // const[showCard,setShowCard]=useState(false)
  // const [name,setName]=useState("");
  // const[email,setEmail]=useState("");
  return (
    <>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setShowCard(true);
        }}
      >
        <label htmlFor="userName">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="userName"
        />
        <label htmlFor="userEmail">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="userEmail"
        />
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
      {showCard && children }
    </>
  );
}

Form.Card = Card;
