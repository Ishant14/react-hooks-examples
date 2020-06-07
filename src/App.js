import React, { useState } from "react";
import RegistratonForm from "./RegistrationForm";
import useFetch from "./customhook/useFetch";

const App = () => {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const getValue = useFetch("https://numbersapi.com/43/trivia");
  console.log(getValue);

  return (
    <div className="App">
      <div>count1 : {count}</div>
      <div>count2 : {count2}</div>
      <button
        onClick={() =>
          setCount(currentState => ({
            ...currentState,
            count: currentState.count + 1
          }))
        }
      >
        Increment
      </button>
      <RegistratonForm />
    </div>
  );
};

export default App;
