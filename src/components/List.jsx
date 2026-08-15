import Items from "./Items";


export default function List({ children }) {
  return <ul className="ul">{children}</ul>;
}
List.Items=Items;