import { addUser} from "./Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import List from "./Components/List";
import React,{ useState } from "react";
import "./App.css";

function App() {
  const dispatch=useDispatch()
  const [user, setUser] = useState({ name: "", email: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(user));
    setUser({ name: "", email: "" })

  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>name</h3>
          <input
            onChange={handleChange}
            value={user.name}
            type="text"
            id="name"
          />
        </div>
        <div>
          <h3>Email</h3>
          <input
            onChange={handleChange}
            value={user.email}
            type="text"
            id="email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <List />
    </div>
  );
}

export default App;
