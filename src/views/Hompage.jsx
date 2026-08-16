import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import LoadingData from "../components/LoadingData";

export default function Homepage(){
      const [names, setNames] = useState([
    "Fabrizio",
    "Nicola",
    "Matteo",
    "Valerio",
  ]);

  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
return(
    <>
    <Header></Header>
      <Main>
        <Main.Form
          showCard={showCard}
          setShowCard={setShowCard}
          name={name}
          email={email}
          setName={setName}
          setEmail={setEmail}
        >
          <Main.Form.Card name={name} email={email}></Main.Form.Card>
        </Main.Form>
        <Main.List>
          {names.map((name, id) => {
            return <Main.List.Items key={id}>{name}</Main.List.Items>;
          })}
        </Main.List>
      </Main>
      <LoadingData></LoadingData>
    </>
)
}