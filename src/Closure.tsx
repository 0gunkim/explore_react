import React from "react";

export default function Closure() {
  const closureHandle = (() => {
    // alert("one Event");
    console.log("clicked");
    return () => {
      console.log("closure");
    };
  })();
  return (
    <div>
      <button onClick={closureHandle}>Alert Button</button>
    </div>
  );
}
