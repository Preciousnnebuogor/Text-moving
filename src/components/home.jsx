import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [storeResult, setStoreResult] = useState(0);
  const arr = ["My name is Osemeke Precious", "I'm a Frontend Developer"];

  setInterval(() => {
    const resultIndex = Math.floor(Math.random() * arr.length);
    setStoreResult(resultIndex);
  }, 3000);

  return (
    <div className="container">
      <div className="content">
        <p>{arr[storeResult]}</p>
      </div>
    </div>
  );
}
