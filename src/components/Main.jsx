import Form from "./Form";
import List from "./List";


export default function Main({children}) {
  return (
    <main className="main">
      {children}
    </main>
  );
}


Main.List=List;
Main.Form=Form;