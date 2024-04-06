import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <button>You pressed me {count} times</button>;
}

export default App;
