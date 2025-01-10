import "./App.css";
import Counter from "./counter";
import Team from "./team";
import Users from "./user";

function App() {
  function handleClick() {
    alert("button click");
  }

  return (
    <>
      <h1>Core concept two</h1>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      {/* 1st option */}
      <button onClick={handleClick}>Click Me</button>

      {/* 2nd option */}
      <button
        onClick={function handleClick2() {
          alert("You click Me");
        }}>
        Click Me 2
      </button>
    </>
  );
}

export default App;
