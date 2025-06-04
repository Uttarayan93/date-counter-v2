import { useState } from "react";

function App() {
  return (
    <div style={{ textAlign: "center", fontSize: "50px", color: "darkgreen" }}>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step : {step}</span>
      </div>
      {/* Counter below */}
      <div>
        <button
          style={{
            fontSize: "20px",
          }}
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <input
          style={{
            fontSize: "20px",
          }}
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          style={{
            fontSize: "20px",
          }}
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      {/* Date Section Below */}
      <div>
        <span>
          {count === 0
            ? `Today is `
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      <span>
        {count !== 0 || step !== 1 ? (
          <button
            style={{
              fontSize: "30px",
            }}
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}

export default App;
