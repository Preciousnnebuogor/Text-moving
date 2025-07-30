import { useEffect, useState } from "react";

export default function Check() {
  const messages = ["Hi", "My name is Osemeke Precious", "I'm a Frontend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => prev + messages[index][char]);
      setChar((prev) => prev + 1);
    }, 100);

    if (char === messages[index].length) {
      clearInterval(interval);
      setTimeout(() => {
        setText("");
        setChar(0);
        setIndex((prev) => (prev + 1) % messages.length);
      }, 2000); // Wait before typing next
    }

    return () => clearInterval(interval);
  }, [char, index]);

  return (
    <div className="container">
      <p>{text}</p>
    </div>
  );
}
