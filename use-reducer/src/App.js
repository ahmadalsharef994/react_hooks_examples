import { useReducer } from "react";
import  { postReducer, INITIAL_STATE } from "./postReducer";

function App() {


  const [state, dispatcher] = useReducer(postReducer, INITIAL_STATE)

  const handleFetch = () => {
    dispatcher({type: "FETCH_START"})
    fetch("https:/jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatcher({type: "FETCH_SUCCESS", payload: data})
      })
      .catch((err) => {
        dispatcher({type: "FETCH_ERROR"})
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading ? "wait ..." : "Fetch the post"}
      </button>
      <p>{state.payload.title}</p>
      <span>{state.error && "Something went wron"}</span>
    </div>
  );
}

export default App;
