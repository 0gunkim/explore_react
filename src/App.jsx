import "./App.css";
import Caching from "./CachingTwoInput";
import Closure from "./Closure";
import Counter from "./Counter";
import UseIdHook from "./hooks/UseIdHook";
function App() {
  return (
    <>
      <UseIdHook />
      <Closure />
      <Counter />
      <Caching />
    </>
  );
}

export default App;
