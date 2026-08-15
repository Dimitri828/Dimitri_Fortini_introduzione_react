import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [names, setNames] = useState([
    "Fabrizio",
    "Nicola",
    "Matteo",
    "Valerio",
  ]);


  const[showCard,setShowCard]=useState(false)
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Main>
        <Main.Form 
        showCard={showCard}
        setShowCard={setShowCard}
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}>
          <Main.Form.Card name={name} email={email}></Main.Form.Card>
        </Main.Form>
        <Main.List>
          {names.map((name, id) => {
            return <Main.List.Items key={id}>{name}</Main.List.Items>;
          })}
        </Main.List>
      </Main>
    </>
  );
}

export default App;
