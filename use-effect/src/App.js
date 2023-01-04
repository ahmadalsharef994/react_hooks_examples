import React, { useEffect, useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("render every time...");
  });

  useEffect(() => {
    console.log("render onMount..");
  }, []);

  useEffect(() => {
    console.log("onMount..");
  }, [1]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("render on resource change..");

    return () => {
      // clean up
      console.log(
        "return from resource change. First thing to run in use Effect on rerender"
      );
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, index) => (
        <pre key={index}>{JSON.stringify(item)}</pre>
      ))}
      <h1>{windowWidth}</h1>
    </>
  );
}

export default App;
