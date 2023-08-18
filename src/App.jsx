import "./App.css";
import Caching from "./CachingTwoInput";
import Closure from "./Closure";
import Counter from "./Counter";
import UseIdHook from "./hooks/UseIdHook";
import CallbackRef from "./useRefTest/CallbackRef";
// import ScrollIntoView from "./useRefTest/ScrollIntoView";
function App() {
  return (
    <>
      <CallbackRef />
      {/* <ScrollIntoView /> */}
      <UseIdHook />
      <Closure />
      <Counter />
      <Caching />
    </>
  );
}

export default App;
