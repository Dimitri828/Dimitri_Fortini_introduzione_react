import { use, useEffect, useState } from "react";

export default function LoadingData() {
  const [users, setUsers] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const getData = async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await promise.json();
    setUsers(json);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleClick = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className="center">
      <button onClick={handleClick} className="btn-submit">
        Click Here
      </button>

      <ul className="ul">
        {isVisible &&
          users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} , {user.email}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
