import { useState } from "react";

interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{title}</h1>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </>
  );
}
