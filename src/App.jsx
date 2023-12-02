import { useState } from "react";
import { fetchData } from "./redux/actionsCreater";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleData = () => {
    dispatch(fetchData());
    setShow(true);
  };

  const users = useSelector((store) => {
    return store.users;
  });

  return (
    <>
      {!show ? <button onClick={handleData}>get data</button> : null}
      {users.map((user) => {
        return (
          <div key={user.id} style={{ border: "2px solid green" }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
